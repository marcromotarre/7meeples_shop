/** @jsxImportSource theme-ui */
import React from "react";
import Image from "next/image";

import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-title.svg";
import { Button } from "../common/index";

export default function MiaMain({ styles, boardgame_id }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
        height: "fit-content",
        ...styles,
      }}
    >
      <Image alt="" sx={{ width: "40%" }} src={mia_title_icon}></Image>
      <h3>es tu asistente de juegos de mesa</h3>
      <Button styles={{ backgroundColor: "#FFBC8B" }}>
        ENCUENTRA TU JUEGO
      </Button>
    </div>
  );
}
