/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import AwardHeader from "./award-header";
import AwardTitle from "./award-title";
import AwardDescription from "./award-description";
import BoardgamesList from "../board-games/board-games-list";

export default function award_view({ award, boardgames }) {
  return (
    <div
      sx={{
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "20px",
      }}
    >
      <AwardHeader></AwardHeader>
      <AwardTitle name={award.name} icon={award.icon} />
      <AwardDescription description={award.description}></AwardDescription>
      <BoardgamesList
        styles={{ width: "80%" }}
        boardgames={boardgames ? boardgames : []}
      />
      <div sx={{ height: "50px" }}></div>
    </div>
  );
}
