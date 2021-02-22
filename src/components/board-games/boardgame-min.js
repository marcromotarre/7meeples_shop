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
  return (
    <div
      sx={{
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
      <Section name={"60 - 120 min"} icon={play_time}></Section>
      <div sx={separator}></div>
      <Section name={"10+ años"} icon={age}></Section>
      <div sx={separator}></div>
      <Section name={"3 a 4 jugadores"} icon={number_of_players}></Section>
      <div sx={separator}></div>
      <Section name={"2.35 / 5"} icon={weight}></Section>
    </div>
  );
}

/*
<CardPrice price={29} pvp={32} />
    <CardMainAction />
    <Separator />
    <CardSection name={"60 - 120 min"} icon={playTime}></CardSection>
    <Separator />
    <CardSection name={"10+ años"} icon={recommendedAge}></CardSection>
    <Separator />
    <CardSection
      name={"3 a 4 jugadores"}
      icon={numberOfPlayers}
    ></CardSection>
    <Separator />
    <CardSection name={"2.35 / 5"} icon={weight}></CardSection>
    <Separator />
    <CardSectionMore />
  </CardContainer>
*/
