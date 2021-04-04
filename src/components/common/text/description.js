/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BoardgameDescription from "src/components/board-games/boardgame-description";
export default function Description({ styles, description = "" }) {
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
    opacity: ["1", "0", "0", "0"],
  };

  return (
    <>
      <div
        sx={{
          display: "grid",
          rowGap: "20px",
          flexDirection: "column",
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
          ...styles,
        }}
      >
        <div sx={separator}></div>
        <BoardgameDescription description={description}></BoardgameDescription>
        <div sx={separator}></div>
      </div>
    </>
  );
}
