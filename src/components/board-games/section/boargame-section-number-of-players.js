/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import number_of_players_best_icon from "../../../assets/svg/best.svg";
import number_of_players_not_recommended_icon from "../../../assets/svg/not-recommended.svg";

export default function BoardgameSectionNumberOfPlayers({
  numberOfPlayersBest,
  numberOfPlayersNotRecommended,
  numberOfPlayers,
}) {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6,30px)",
        columnGap: "4px",
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
              fontSize: "17px",
            }}
          >
            {numPlayers}
          </span>
          {numberOfPlayersBest.includes(numPlayers) && (
            <img
              sx={{ position: "absolute", width: "30px", height: "30px" }}
              src={number_of_players_best_icon}
            ></img>
          )}
          {numberOfPlayersNotRecommended.includes(numPlayers) && (
            <img
              sx={{ position: "absolute", width: "30px", height: "30px" }}
              src={number_of_players_not_recommended_icon}
            ></img>
          )}
        </div>
      ))}
    </div>
  );
}
