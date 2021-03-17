/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import icon from "../../../assets/svg/sections/number-of-players.svg";
import number_of_players_best_icon from "../../../assets/svg/best.svg";
import number_of_players_not_recommended_icon from "../../../assets/svg/not-recommended.svg";
import Section from "./boardgame-section";

export default function SectionNumberOfPlayers({
  numberOfPlayersBest,
  numberOfPlayersNotRecommended,
  numberOfPlayers,
}) {
  return (
    <Section icon={icon}>
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
  );
}
