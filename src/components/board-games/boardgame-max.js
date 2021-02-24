/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";
import BoardgameAverage from "./boardgame-average";
import BoardgameName from "./boardgame-name";
import BoardgameSection from "./section/boardgame-section-max";
import BoardgameSectionText from "./section/boardgame-section-text";
import age_icon from "../../assets/svg/sections/age.svg";
import play_time_icon from "../../assets/svg/sections/play-time.svg";
import number_of_players_icon from "../../assets/svg/sections/number-of-players.svg";
import weight_icon from "../../assets/svg/sections/weight.svg";

import {
  play_time_string,
  weight_string,
  age_string,
  round_weight,
} from "./utils";
export default function BoardgameMax({ boardgame }) {
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
    weight,
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
      <div
        sx={{
          width: "100%",
          display: "grid",
          justifyItems: "center",
          rowGap: "13px",
        }}
      >
        <BoardgameSection
          styles={{ width: "80%" }}
          name={"Duración"}
          icon={play_time_icon}
        >
          <BoardgameSectionText>
            {play_time_string(playTimeMin, playTimeMax)}
          </BoardgameSectionText>
        </BoardgameSection>
        <BoardgameSection
          styles={{ width: "80%" }}
          name={"Edad"}
          icon={age_icon}
        >
          <BoardgameSectionText>{age_string(age)}</BoardgameSectionText>
        </BoardgameSection>
        <BoardgameSection
          styles={{ width: "80%" }}
          name={"Dificultad"}
          icon={weight_icon}
        >
          <BoardgameSectionText>
            {weight_string(round_weight(weight))}
          </BoardgameSectionText>
        </BoardgameSection>
      </div>
    </div>
  );
}
