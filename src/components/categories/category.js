/** @jsxImportSource theme-ui */
import React from "react";
import meeples_awards_icon from "../../assets/svg/categories/icon.svg";
import Description from "./category-description";
import BoardGamesList from "../board-games/board-games-list";
import Image from "next/image";
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
        <Image sx={{ width: "50px" }} src={icon}></Image>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridTemplateColumns: "100%",
          }}
        >
          <Image
            sx={{ width: "22px", marginRight: "10px" }}
            src={meeples_awards_icon}
          ></Image>

          <h3>{name}</h3>
          <Image
            sx={{ width: "22px", marginLeft: "10px" }}
            src={meeples_awards_icon}
          ></Image>
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
