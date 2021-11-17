/** @jsxImportSource theme-ui */
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import BoardGamesList from "../board-games/board-games-list";
import MiaRecomendation from "./mia-recomendation";
import { useState, useEffect } from "react";
import { BOARDGAME_ATTRIBUTES } from "../board-games/utils";
import {
  get_common_boardgames,
  get_boardgames_by_families,
} from "../designers/utils";
import { remove } from "./utils";
import MiaSection from "./mia-section";
import DesignerImage from "../common/images/designer-image";
import Slider from "../common/slider/game-slider";
export default function MiaRecommends({ boardgame_id }) {
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const designers = useSelector((state) => state.designersReducer.designers);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const families = useSelector((state) => state.familiesReducer.families);
  const boardgame = boardgames?.find(({ id }) => id === parseInt(boardgame_id));
  const [mia_recomendations, set_mia_recomendations] = useState([]);
  useEffect(() => {
    getRecomendations();
  }, []);

  const getRecomendations = async () => {
    let recomendation = recomendations({
      boardgames: boardgames.filter((_boardgame) => {
        return _boardgame.id !== boardgame.id;
      }),
      boardgame,
    });

    //get bests

    //get by author
    //const authorRecomendations

    const expansions = recomendation.filter(({ id }) =>
      boardgame.expansions.includes(id)
    );
    recomendation = remove({
      original: recomendation,
      to_delete: expansions,
    });
    const expansionOf = recomendation.filter(({ id }) =>
      boardgame.expansionOf.includes(id)
    );
    recomendation = remove({
      original: recomendation,
      to_delete: expansionOf,
    });

    const game_families = families.filter(({ type }) => type === "Game");
    var filtered = game_families.filter(function (e) {
      return this.indexOf(e) < 0;
    }, boardgame.families);
    const family = get_boardgames_by_families({
      boardgames: recomendation,
      families: filtered
        .map(({ id }) => id)
        .filter((el) => boardgame.families.includes(el)),
    });
    recomendation = remove({
      original: recomendation,
      to_delete: family,
    });

    /*
 !boardgame.expansions.includes(_boardgame.id) &&
          !boardgame.expansionOf.includes(_boardgame.id)
    */
    recomendation = remove({
      original: recomendation,
      to_delete: most_related,
    });

    const most_related = recomendation.filter(({}, index) => index < 7);
    recomendation = remove({
      original: recomendation,
      to_delete: most_related,
    });
    const designers_recommendation = get_common_boardgames({
      boardgames: recomendation,
      designers: boardgame.designers.map((id) =>
        designers.find((designer) => designer.id === id)
      ),
    });
    recomendation = remove({
      original: recomendation,
      to_delete: designers_recommendation.boardgames,
    });
    const designer_recommendation = boardgame.designers.map((designerId) => {
      const designer_boardgames = {
        type: "designer",
        designer: designers.find(({ id }) => id === designerId),
        boardgames: recomendation.filter(({ designers }) =>
          designers.includes(designerId)
        ),
      };
      recomendation = remove({
        original: recomendation,
        to_delete: designer_boardgames.boardgames,
      });
      return designer_boardgames;
    });
    const result = [
      {
        type: "family",
        boardgames: [...expansions, ...expansionOf, ...family],
      },
      { type: "most_related", boardgames: most_related },
      {
        type: "designers",
        boardgames: designers_recommendation.boardgames,
        designers: designers_recommendation.designers,
      },

      ...designer_recommendation,
    ];

    //get by number of players
    //get by similar play time
    //get by category x
    //get by mechanic x
    console.log(result);
    set_mia_recomendations(result);
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        rowGap: "40px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {mia_recomendations.map((recomendation) => {
        if (recomendation.type === "most_related") {
          return (
            <Slider
              title={`Si te gusta ${boardgame.webname}`}
              elements={recomendation.boardgames}
              styles={{
                height: ["100%"],
              }}
            ></Slider>
          );
        } else if (recomendation.type === "designer") {
          return (
            <Slider
              title={`Autor ${recomendation.designer.name}`}
              elements={recomendation.boardgames}
              styles={{
                height: ["100%"],
              }}
            ></Slider>
          );
        } else if (recomendation.type === "family") {
          return (
            <Slider
              title={`Family`}
              elements={recomendation.boardgames}
              styles={{
                height: ["100%"],
              }}
            ></Slider>
          );
        }
      })}
    </div>
  );
}
