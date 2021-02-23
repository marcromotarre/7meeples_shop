/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import AwardHeader from "./award-header";
import AwardsList from "./awards-list";
import AwardTitle from "./award-title";
import AwardDescription from "./award-description";
import BoardgamesList from "../board-games/board-games-list";

export default function award_view({ awards }) {
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
      <span
        sx={{
          textAlign: "center",
          width: "75%",
          fontStyle: "italic",
          fontWeight: "100",
        }}
      >
        Estas son nuestras recomendaciones por cada categoria
      </span>
      <AwardsList awards={awards} />
    </div>
  );
}
