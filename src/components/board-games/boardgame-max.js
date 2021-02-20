/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";

export default function BoardgameMin({ boardgame }) {
  console.log(boardgame);
  const {
    id,
    webname: name,
    image,
    PVP,
    active,
    age,
    average,
    categories,
    description,
    designers,
    expansionOf,
    expansions,
    images,
    mechechanisms,
    numVotes,
    numberOfPlayers,
    numberOfPlayersBest,
    numberOfPlayersNotRecommended,
    playTimeMax,
    playTimeMin,
    price,
    stock,
    year,
  } = boardgame;

  return (
    <div>
      <div>ID: {id}</div>
      <div>Name: {name}</div>
      <div>PVP: {PVP}</div>
      <div>active: {active}</div>
      <div>age: {age}</div>
      <div>average: {average}</div>
      <div>description: {description}</div>
      {image && <img src={image} />}
    </div>
  );
}
