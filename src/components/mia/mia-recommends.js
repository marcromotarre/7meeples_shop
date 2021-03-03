/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import BoardGamesList from "../board-games/board-games-list";

export default function MiaRecommends({ boardgame_id }) {
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const designers = useSelector((state) => state.designersReducer.designers);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const boardgame = boardgames?.find(({ id }) => id === parseInt(boardgame_id));
  const mia_recomendations = recomendations({ boardgame, boardgames });

  console.log(mia_recomendations);
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      Mia recommends
      <BoardGamesList
        styles={{ width: "80%" }}
        boardgames={mia_recomendations}
      ></BoardGamesList>
    </div>
  );
}
