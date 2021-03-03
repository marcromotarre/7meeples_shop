/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Boardgame from "./boardgame-min";
import { useRouter } from "next/router";
export default function GamesList({
  boardgames,
  styles = {},
  clickOnBoardGame = () => {},
}) {
  const router = useRouter();

  const onClickBoardgame = (id) => {
    router.push(`/juego/${id}`);
    clickOnBoardGame();
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        rowGap: "25px",
        ...styles,
      }}
    >
      {boardgames.map((boardgame) => (
        <Boardgame
          key={boardgame.id}
          onClick={onClickBoardgame}
          boardgame={boardgame}
        />
      ))}
    </div>
  );
}
