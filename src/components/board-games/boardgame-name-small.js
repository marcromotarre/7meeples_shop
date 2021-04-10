/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";

export default function BoardgameName({ styles, name, year }) {
  let fontSize = "24px;";

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        ...styles,
      }}
    >
      <h3>
        {name.length < 31 ? name : name.substring(0, 27) + "..."}{" "}
        <span
          sx={{
            width: "100%",
            fontSize: "15px",
            fontWeight: "100",
            fontStyle: "italic",
            height: "100%",
            verticalAlign: "middle",
          }}
        >
          ({year})
        </span>
      </h3>
    </div>
  );
}
