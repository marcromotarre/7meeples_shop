/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";

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
        width: "80%",
      }}
    >
      <p
        sx={{
          fontSize,
          margin: 0,
          padding: 0,
          verticalAlign: "middle",
        }}
      >
        {name + "    "}
        <span
          sx={{
            fontSize: "15px",
            fontWeight: "100",
            fontStyle: "italic",
            height: "100%",
            verticalAlign: "middle",
          }}
        >
          ({year})
        </span>
      </p>
    </div>
  );
}
