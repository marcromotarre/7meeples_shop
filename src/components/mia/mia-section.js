/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { BOARDGAME_ATTRIBUTES } from "../board-games/utils";
import BoardGamesList from "../board-games/board-games-list";
import MiaRecomendation from "./mia-recomendation";
export default function MiaSection({ children, boardgames = [], styles = {} }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        rowGap: "10px",
        justifyItems: "center",
        alignItems: "center",
        ...styles,
      }}
    >
      <div
        sx={{
          width: "100%",
          display: "grid",
          rowGap: "10px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>

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
          boardgames={boardgames}
          attributes={[BOARDGAME_ATTRIBUTES.MORE]}
          moreAttributes={[
            BOARDGAME_ATTRIBUTES.PLAY_TIME,
            BOARDGAME_ATTRIBUTES.AGE,
            BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS,
            BOARDGAME_ATTRIBUTES.WEIGHT,
          ]}
        />
      </div>
    </div>
  );
}
