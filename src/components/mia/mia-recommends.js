/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import BoardGamesList from "../board-games/board-games-list";
import MiaRecomendation from "./mia-recomendation";
import { useState, useEffect } from "react";

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
    const recomendation = recomendations({
      boardgames: boardgames.filter((_boardgame) => {
        return (
          _boardgame.id !== boardgame.id &&
          !boardgame.expansions.includes(_boardgame.id) &&
          !boardgame.expansionOf.includes(_boardgame.id)
        );
      }),
      boardgame,
    }).filter((b, index) => index < 5);
    set_mia_recomendations(recomendation);
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <MiaRecomendation
        title={`Si te gusta ${boardgame.webname}`}
        subtitle={`te recomienda`}
      ></MiaRecomendation>
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoardGamesList
          styles={{ width: "80%" }}
          boardgames={mia_recomendations}
        ></BoardGamesList>
      </div>
    </div>
  );
}
