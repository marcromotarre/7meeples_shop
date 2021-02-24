/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";
import hexa_black from "../../assets/svg/hexa-black.svg";

export default function BoardgameScore({ score, numVotes }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          position: "relative",
        }}
      >
        <img sx={{ height: "40px" }} src={hexa_black}></img>
        <span
          sx={{
            textAlign: "center",
            width: "100%",
            left: "0",
            fontSize: "18px",
            top: "19%",
            color: "white",
            fontWeight: "100",
            position: "absolute",
          }}
        >
          {score}
        </span>
      </div>
      <span
        sx={{
          fontSize: "13px",
          fontWeight: "100",
          fontStyle: "italic",
        }}
      >
        {numVotes} votos
      </span>
    </div>
  );
}
