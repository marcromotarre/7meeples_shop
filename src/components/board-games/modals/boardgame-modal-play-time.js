/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import play_time_icon from "../../../assets/svg/sections/play-time.svg";
import { duration_string, play_time_string } from "../utils";
import { Question } from "../../common/index";

export default function BoardgameModalPlayTime({ boardgame }) {
  const { webname, playTimeMin, playTimeMax } = boardgame;

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "100%",
    justifyItems: "center",
    alignItems: "center",
  };

  return (
    <div
      sx={{
        ...gridStyles,
        rowGap: "15px",
      }}
    >
      <div
        sx={{
          ...gridStyles,
          rowGap: "10px",
        }}
      >
        <h1>{webname}</h1>
        <p>{duration_string(playTimeMin, playTimeMax)}</p>
      </div>
      <div
        sx={{
          ...gridStyles,
          rowGap: "5px",
        }}
      >
        <img sx={{ height: "22px" }} src={play_time_icon} />
        <h3>Duración</h3>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{play_time_string(playTimeMin, playTimeMax)}</p>
      </div>
      <div>
        <Question>{"¿Que tipo de juegos hay segun su duración?"}</Question>
      </div>
    </div>
  );
}
