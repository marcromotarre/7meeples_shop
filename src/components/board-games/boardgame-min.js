/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "./../../backend/boardgames";

export default function BoardgameMin({ boardgame, onClick }) {
  const { id, webname: name, image } = boardgame;
  const onClickBoardgame = () => {
    console.log("id", id);
    onClick(id);
  };
  return (
    <div onClick={onClickBoardgame}>
      <div>{name}</div>
      {image && <img src={image} />}
    </div>
  );
}
