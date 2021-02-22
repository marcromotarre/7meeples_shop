/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Section from "./boardgame-section";

import age from "../../assets/svg/sections/age.svg";
import play_time from "../../assets/svg/sections/play-time.svg";
import number_of_players from "../../assets/svg/sections/number-of-players.svg";
import weight from "../../assets/svg/sections/weight.svg";

export default function BoardgameMin({ boardgame, onClick }) {
  const { id, webname: name, image } = boardgame;
  const onClickBoardgame = () => {
    console.log("id", id);
    onClick(id);
  };
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  const play_time_string = (play_time_min, play_time_max) =>
    play_time_min === play_time_max
      ? `${play_time_min} min`
      : `${play_time_min} - ${play_time_max} min`;
  const weight_string = (weight) => `${weight} / 5`;
  const age_string = (age) => `${age} años`;
  return (
    <div
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
      }}
      onClick={onClickBoardgame}
    >
      <div
        sx={{
          width: "100%",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img sx={{ width: "80%" }} src={image}></img>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          marginLeft: "30px",
        }}
      >
        <span
          sx={{
            fontSize: "24px",
            padding: "0",
            margin: "0",
          }}
        >
          {name}
        </span>
      </div>
      <div sx={separator}></div>
      <Section
        name={play_time_string(boardgame.playTimeMin, boardgame.playTimeMax)}
        icon={play_time}
      ></Section>
      <div sx={separator}></div>
      <Section name={age_string(boardgame.age)} icon={age}></Section>
      <div sx={separator}></div>
      <Section name={"3 a 4 jugadores"} icon={number_of_players}></Section>
      <div sx={separator}></div>
      <Section name={weight_string(boardgame.weight)} icon={weight}></Section>
    </div>
  );
}
