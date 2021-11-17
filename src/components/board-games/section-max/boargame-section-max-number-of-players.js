import React from "react";
/** @jsxImportSource theme-ui */
import icon from "../../../assets/svg/sections/number-of-players.svg";
import number_of_players_best_icon from "../../../assets/svg/best.svg";
import number_of_players_not_recommended_icon from "../../../assets/svg/not-recommended.svg";
import Section from "./boardgame-section-max";
import Image from "next/image";

export default function SectionMaxNumberOfPlayers({
  styles,
  numberOfPlayersBest,
  numberOfPlayersNotRecommended,
  numberOfPlayers,
}) {
  return (
    <Section name={"Numero de jugadores"} styles={styles} icon={icon}>
      <div
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          marginLeft:
            numberOfPlayersNotRecommended.includes(numberOfPlayers[0]) ||
            numberOfPlayersBest.includes(numberOfPlayers[0])
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
              }}
            >
              {numPlayers}
            </span>
            {numberOfPlayersBest.includes(numPlayers) && (
              <Image
                sx={{
                  position: "absolute",
                  width: "30px",
                  height: "30px",
                }}
                src={number_of_players_best_icon}
              ></Image>
            )}
            {numberOfPlayersNotRecommended.includes(numPlayers) && (
              <Image
                sx={{
                  position: "absolute",
                  width: "30px",
                  height: "30px",
                }}
                src={number_of_players_not_recommended_icon}
              ></Image>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
