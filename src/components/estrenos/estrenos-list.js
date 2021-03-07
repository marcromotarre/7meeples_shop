/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-title.svg";
import { Button } from "../common/index";

export default function MiaMain({ boardgame_id }) {
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
      <img sx={{ width: "40%" }} src={mia_title_icon}></img>
      <h3>es tu asistente de juegos de mesa</h3>
      <Button styles={{ backgroundColor: "#FFBC8B" }}>
        ENCUENTRA TU JUEGO
      </Button>
    </div>
  );
}
