/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import BoardgameMinTemplate from "src/components/board-games/boardgame-min-fixed-height-template";
import React, { useState } from "react";

import { BOARDGAME_ATTRIBUTES } from "src/components/board-games/utils";

export default function GameSliderTemplate({ styles }) {
  const [showPlayTime, setShowPlayTime] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showNumberPlayers, setShowNumberPlayers] = useState(false);
  const [showWeight, setShowWeight] = useState(false);

  let attributes = [];

  if (showPlayTime) attributes.push(BOARDGAME_ATTRIBUTES.PLAY_TIME);
  if (showAge) attributes.push(BOARDGAME_ATTRIBUTES.AGE);
  if (showNumberPlayers)
    attributes.push(BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS);
  if (showWeight) attributes.push(BOARDGAME_ATTRIBUTES.WEIGHT);

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "start",
        alignItems: "start",
        rowGap: "10px",
        height: "fit-content",
        ...styles,
      }}
    >
      <h3
        sx={{
          paddingLeft: "30px",
        }}
      >
        title
      </h3>
      <div
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          sx={{
            position: "relative",
            paddingLeft: "30px",
            paddingBottom: "20px",
            display: "grid",
            width: "100%",
            gridTemplateColumns: [
              `repeat(4, 250px) 15px`,
              `repeat(4, 30%) 15px`,
              `repeat(4, 25%) 15px`,
              `repeat(4, 20%) 15px`,
            ],
            alignItems: "center",
            justifyItems: "center",
            columnGap: "25px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <BoardgameMinTemplate styles={{ width: "100%", height: "350px" }} />
          <BoardgameMinTemplate styles={{ width: "100%", height: "350px" }} />
          <BoardgameMinTemplate styles={{ width: "100%", height: "350px" }} />
          <BoardgameMinTemplate styles={{ width: "100%", height: "350px" }} />
          <div sx={{ height: "100%", width: "10px" }}></div>
        </div>
      </div>
    </div>
  );
}
