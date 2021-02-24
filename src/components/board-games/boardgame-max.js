/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";
import BoardgameAverage from "./boardgame-average";
import BoardgameName from "./boardgame-name";
import BoardgameSection from "./boardgame-section-max";
import age_icon from "../../assets/svg/sections/age.svg";
import play_time_icon from "../../assets/svg/sections/play-time.svg";
import number_of_players_icon from "../../assets/svg/sections/number-of-players.svg";
import weight_icon from "../../assets/svg/sections/weight.svg";
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
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      {image && <img sx={{ width: "80%" }} src={image} />}
      <BoardgameAverage average={average} numVotes={numVotes} />
      <BoardgameName name={name} year={year} />
      <div sx={{ width: "100%" }}>
        <BoardgameSection name={"Duración"} icon={age_icon}>
          <span>{"60 - 120 minutos"}</span>
        </BoardgameSection>
      </div>
    </div>
  );
}
