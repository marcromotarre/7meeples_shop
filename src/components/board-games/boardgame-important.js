/** @jsxImportSource theme-ui */
import sale_icon from "../../assets/svg/menu/sale-icon.svg";
import BoardgameMin from "../board-games/boardgame-min";
import { BOARDGAME_ATTRIBUTES } from "../board-games/utils";
import React, { useState, useEffect } from "react";
import Loading from "../common/loading/loading";
import { useSelector } from "react-redux";
import SectionTitle from "../sections/section-title";
import { Button } from "../common";

export default function BoardgameImportant({ icon, title, boardgame, styles }) {
  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "100%",
        alignItems: "center",
        justifyItems: "center",
        rowGap: "15px",
        height: "fit-content",
        ...styles,
      }}
    >
      <SectionTitle title={title}></SectionTitle>
      <div
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "100%",
          alignItems: "center",
          justifyItems: "center",
          rowGap: "35px",
          maxWidth: "350px",
        }}
      >
        <BoardgameMin
          styles={{ width: "100%" }}
          boardgame={boardgame}
          attributes={[
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
