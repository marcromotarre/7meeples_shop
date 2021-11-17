/** @jsxImportSource theme-ui */
import React from "react";
import { get_boardgames } from "../../backend/boardgames";
import hexa_black from "../../assets/svg/hexa-black.svg";
import Image from "next/image";
export default function BoardgameAverage({
  template,
  styles,
  average,
  numVotes,
}) {
  let num_votes_string = `${numVotes} votos`;
  if (numVotes >= 1000 && numVotes <= 10000) {
    num_votes_string = `${Math.round((numVotes / 1000) * 100) / 100}k votos`;
  } else if (numVotes >= 10000) {
    num_votes_string = `${Math.round(numVotes / 1000)}k votos`;
  }

  average = Math.round(average * 10) / 10;
  let average_string =
    average === 10 ? "10" : average % 1 === 0 ? `${average}.0` : average;

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: ["auto", "auto auto"],
        justifyItems: "center",
        alignItems: "center",
        rowGap: ["0px", "0px"],
        columnGap: ["0px", "10px"],
        ...styles,
      }}
    >
      <div
        sx={{
          position: "relative",
        }}
      >
        <Image
          alt=""
          sx={{ height: "40px" }}
          src={template ? hexa_default : hexa_black}
        ></Image>
        <span
          sx={{
            textAlign: "center",
            width: "100%",
            left: ["0", "0"],
            fontSize: "18px",
            top: "19%",
            color: "white",
            fontWeight: "100",
            position: "absolute",
          }}
        >
          {average_string}
        </span>
      </div>
      <span
        sx={{
          fontSize: "13px",
          fontWeight: "100",
          fontStyle: "italic",
        }}
      >
        {num_votes_string}
      </span>
    </div>
  );
}
