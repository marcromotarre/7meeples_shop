/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Boardgame from "./boardgame-min";
import { useRouter } from "next/router";
export default function GamesList({ boardgames }) {
  const router = useRouter();

  const onClickBoardgame = (id) => {
    console.log("onClickBoardgame", id);
    router.push(`/juego/${id}`);
  };

  return (
    <>
      {boardgames.map((boardgame) => (
        <Boardgame
          key={boardgame.id}
          onClick={onClickBoardgame}
          boardgame={boardgame}
        />
      ))}
    </>
  );
}
