/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import play_time_icon from "../../../assets/svg/sections/play-time.svg";
import { duration_string, play_time_string } from "../utils";

export default function BoardgameModalPlayTime({ boardgame }) {
  const { webname, playTimeMin, playTimeMax } = boardgame;

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "100%",
        rowGap: "15px",
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "100%",
          rowGap: "5px",
        }}
      >
        <span
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "400",
          }}
        >
          {webname}
        </span>
        <span
          sx={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "100",
          }}
        >
          {duration_string(playTimeMin, playTimeMax)}
        </span>
      </div>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "100%",
          rowGap: "5px",
          justifyItems: "center",
        }}
      >
        <img sx={{ height: "22px" }} src={play_time_icon} />
        <span
          sx={{
            fontSize: "17px",
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          Duración
        </span>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          sx={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "100",
          }}
        >
          {play_time_string(playTimeMin, playTimeMax)}
        </span>
      </div>
    </div>
  );
}
