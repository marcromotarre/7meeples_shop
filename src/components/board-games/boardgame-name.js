/** @jsxImportSource theme-ui */

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
        width: "80%",
        ...styles,
      }}
    >
      <h1>
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
      </h1>
    </div>
  );
}
