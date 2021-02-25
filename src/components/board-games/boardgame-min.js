/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Section from "./section/boardgame-section";
import BoardgameScore from "./boardgame-average";
import BoardgameName from "./boardgame-name";

import age_icon from "../../assets/svg/sections/age.svg";
import play_time_icon from "../../assets/svg/sections/play-time.svg";
import number_of_players_icon from "../../assets/svg/sections/number-of-players.svg";
import weight_icon from "../../assets/svg/sections/weight.svg";

import number_of_players_best_icon from "../../assets/svg/best.svg";
import number_of_players_not_recommended_icon from "../../assets/svg/not-recommended.svg";

import {
  play_time_string,
  weight_string,
  age_string,
  round_weight,
} from "./utils";

export default function BoardgameMin({ boardgame, onClick }) {
  const {
    id,
    webname: name,
    image,
    average,
    age,
    numVotes,
    year,
    weight,
    playTimeMin,
    playTimeMax,
    numberOfPlayersNotRecommended,
    numberOfPlayersBest,
    numberOfPlayers,
    reduced = false,
    imageDefault,
  } = boardgame;

  const onClickBoardgame = () => {
    onClick(id);
  };
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  const section_fontSize = "17px";

  return (
    <div
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
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
          sx={{
            padding: "20px 0px 0px 0px",
            maxHeight: "300px",
            maxWidth: "80%",
          }}
          src={image ? image : imageDefault}
        ></img>
      </div>
      <BoardgameScore average={average} numVotes={numVotes}></BoardgameScore>
      <BoardgameName name={name} year={year} />
      {!reduced && <div sx={separator}></div>}
      <div sx={{ width: "100%" }}>
        {!reduced && (
          <>
            <Section icon={play_time_icon}>
              <span sx={{ fontSize: section_fontSize }}>
                {play_time_string(playTimeMin, playTimeMax)}
              </span>
            </Section>
            <div sx={separator}></div>{" "}
          </>
        )}
        {!reduced && (
          <>
            <Section icon={age_icon}>
              <span sx={{ fontSize: section_fontSize }}>{age_string(age)}</span>
            </Section>
            <div sx={separator}></div>
          </>
        )}
        {!reduced && (
          <>
            <Section icon={number_of_players_icon}>
              <div
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6,30px)",
                  columnGap: "4px",
                  gridAutoFlow: "column",
                  marginLeft:
                    numberOfPlayersNotRecommended.includes(
                      numberOfPlayers[0]
                    ) || numberOfPlayersBest.includes(numberOfPlayers[0])
                      ? "0"
                      : "-10px",
                }}
              >
                {numberOfPlayers.slice(0, 8).map((numPlayers) => (
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
                    {numberOfPlayersBest.includes(numPlayers) && (
                      <img
                        sx={{
                          position: "absolute",
                          width: "30px",
                          height: "30px",
                        }}
                        src={number_of_players_best_icon}
                      ></img>
                    )}
                    {numberOfPlayersNotRecommended.includes(numPlayers) && (
                      <img
                        sx={{
                          position: "absolute",
                          width: "30px",
                          height: "30px",
                        }}
                        src={number_of_players_not_recommended_icon}
                      ></img>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <div sx={separator}></div>
          </>
        )}
        {!reduced && (
          <Section icon={weight_icon}>
            <span sx={{ fontSize: section_fontSize }}>
              {weight_string(round_weight(weight))}
            </span>
          </Section>
        )}
      </div>
    </div>
  );
}
