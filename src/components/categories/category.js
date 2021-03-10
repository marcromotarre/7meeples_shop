/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

import meeples_awards_icon from "../../assets/svg/categories/icon.svg";
import Description from "./category-description";
import BoardGamesList from "../board-games/board-games-list";
export default function Category({ icon, name, description, boardgames = [] }) {
  return (
    <div
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        gridTemplateColumns: "100%",
        rowGap: "30px",
      }}
    >
      <div
        sx={{
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridTemplateColumns: "100%",
          rowGap: "10px",
        }}
      >
        <img sx={{ width: "50px" }} src={icon}></img>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridTemplateColumns: "100%",
          }}
        >
          <img
            sx={{ width: "22px", marginRight: "10px" }}
            src={meeples_awards_icon}
          ></img>

          <h3>{name}</h3>
          <img
            sx={{ width: "22px", marginLeft: "10px" }}
            src={meeples_awards_icon}
          ></img>
        </div>
      </div>

      <Description description={description} />
      <BoardGamesList
        styles={{ width: "80%" }}
        boardgames={boardgames}
      ></BoardGamesList>
    </div>
  );
}
