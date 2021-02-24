/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Section from "./boardgame-section";
import BoardgameScore from "./boardgame-score";

import age from "../../assets/svg/sections/age.svg";
import play_time from "../../assets/svg/sections/play-time.svg";
import number_of_players from "../../assets/svg/sections/number-of-players.svg";
import weight from "../../assets/svg/sections/weight.svg";

import number_of_players_best_icon from "../../assets/svg/best.svg";
import number_of_players_not_recommended_icon from "../../assets/svg/not-recommended.svg";

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

  const round_weight = (weight) =>
    Math.round((weight + Number.EPSILON) * 100) / 100;

  const section_fontSize = "17px";

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
        <img
          sx={{ padding: "20px 0px", maxHeight: "300px", maxWidth: "80%" }}
          src={image}
        ></img>
      </div>
      <BoardgameScore score={9.9} numVotes={18900}></BoardgameScore>
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
      <Section icon={play_time}>
        <span sx={{ fontSize: section_fontSize }}>
          {play_time_string(boardgame.playTimeMin, boardgame.playTimeMax)}
        </span>
      </Section>
      <div sx={separator}></div>
      <Section icon={age}>
        <span sx={{ fontSize: section_fontSize }}>
          {age_string(boardgame.age)}
        </span>
      </Section>
      <div sx={separator}></div>
      <Section icon={number_of_players}>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6,30px)",
            columnGap: "4px",
            gridAutoFlow: "column",
            marginLeft:
              boardgame.numberOfPlayersNotRecommended.includes(
                boardgame.numberOfPlayers[0]
              ) ||
              boardgame.numberOfPlayersBest.includes(
                boardgame.numberOfPlayers[0]
              )
                ? "0"
                : "-10px",
          }}
        >
          {boardgame.numberOfPlayers.slice(0, 8).map((numPlayers) => (
            <div
              key={numPlayers}
              sx={{
                display: "flex",
                width: "30px",
                height: "30px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                sx={{
                  justifySelf: "center",
                  alignSelf: "center",
                  fontSize: section_fontSize,
                }}
              >
                {numPlayers}
              </span>
              {boardgame.numberOfPlayersBest.includes(numPlayers) && (
                <img
                  sx={{ position: "absolute", width: "30px", height: "30px" }}
                  src={number_of_players_best_icon}
                ></img>
              )}
              {boardgame.numberOfPlayersNotRecommended.includes(numPlayers) && (
                <img
                  sx={{ position: "absolute", width: "30px", height: "30px" }}
                  src={number_of_players_not_recommended_icon}
                ></img>
              )}
            </div>
          ))}
        </div>
      </Section>
      <div sx={separator}></div>
      <Section icon={weight}>
        <span sx={{ fontSize: section_fontSize }}>
          {weight_string(round_weight(boardgame.weight))}
        </span>
      </Section>
    </div>
  );
}
