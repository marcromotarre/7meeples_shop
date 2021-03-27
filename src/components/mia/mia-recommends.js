/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import BoardGamesList from "../board-games/board-games-list";
import MiaRecomendation from "./mia-recomendation";
import { useState, useEffect } from "react";
import { BOARDGAME_ATTRIBUTES } from "../board-games/utils";
import { get_common_boardgames } from "../designers/utils";
import { remove } from "./utils";
import MiaSection from "./mia-section";
import DesignerImage from "../common/images/designer-image";
export default function MiaRecommends({ boardgame_id }) {
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const designers = useSelector((state) => state.designersReducer.designers);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const boardgame = boardgames?.find(({ id }) => id === parseInt(boardgame_id));
  const [mia_recomendations, set_mia_recomendations] = useState([]);

  useEffect(() => {
    getRecomendations();
  }, []);

  const getRecomendations = async () => {
    let recomendation = recomendations({
      boardgames: boardgames.filter((_boardgame) => {
        return (
          _boardgame.id !== boardgame.id &&
          !boardgame.expansions.includes(_boardgame.id) &&
          !boardgame.expansionOf.includes(_boardgame.id)
        );
      }),
      boardgame,
    });

    //get bests

    //get by author
    //const authorRecomendations

    const most_related = recomendation.filter(({}, index) => index < 4);
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
        boardgames: recomendation
          .filter(({ designers }) => designers.includes(designerId))
          .filter(({}, index) => index < 4),
      };
      recomendation = remove({
        original: recomendation,
        to_delete: designer_boardgames.boardgames,
      });
      return designer_boardgames;
    });
    const result = [
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
            <MiaSection boardgames={recomendation.boardgames}>
              <MiaRecomendation></MiaRecomendation>
              <p sx={{ textAlign: "center" }}>
                Si te gusta {boardgame.webname} te va a gustar
              </p>
            </MiaSection>
          );
        } else if (recomendation.type === "designer") {
          return (
            <MiaSection boardgames={recomendation.boardgames}>
              <div
                sx={{
                  display: "grid",
                  rowGap: "5px",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <h3>Más juegos de</h3>
                <DesignerImage
                  styles={{ width: "100px" }}
                  name={recomendation.designer.name}
                  border={3}
                ></DesignerImage>
                <p>{recomendation.designer.name}</p>
              </div>
            </MiaSection>
          );
        }
      })}
    </div>
  );
}
