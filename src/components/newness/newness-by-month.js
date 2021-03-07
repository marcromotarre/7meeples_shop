/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import SectionTitle from "../sections/section-title";
import newness_icon from "../../assets/svg/newness/icon.svg";
import { useEffect } from "react";
import { get_newness } from "src/backend/newness";
import BoardgameList from "../board-games/board-games-list";

export default function NewnessByMonth({ month, year, boardgames }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      <BoardgameList
        styles={{ width: "80%" }}
        boardgames={boardgames}
      ></BoardgameList>
    </div>
  );
}
