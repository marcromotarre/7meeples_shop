/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";
import hexa_black from "../../assets/svg/hexa-black.svg";

export default function BoardgameAverage({ name, year }) {
  let fontSize = "24px;";
  if (name.length > 18) {
    fontSize = "22px";
  }
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "calc(100% - 70px)",
        marginLeft: "30px",
      }}
    >
      <span
        sx={{
          fontSize,
          paddingRight: "10px",
        }}
      >
        {name}
      </span>
      <span
        sx={{
          fontSize: "15px",
          fontWeight: "100",
          fontSTyle: "italic",
        }}
      >
        ({year})
      </span>
    </div>
  );
}
