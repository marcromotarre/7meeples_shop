/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";

export default function BoardgameGalleryImage({ images }) {
  let fontSize = "24px;";
  if (name.length > 18) {
    fontSize = "22px";
  }
  return (
    <div
      sx={{
        display: "flex",
        flexFlow: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images &&
        images.map((image, index) => (
          <div sx={{ height: "auto", width: "90%" }}>
            <img
              sx={{ width: "100%", maxHeight: "auto", minWidth: "0" }}
              key={index}
              src={image}
            ></img>
          </div>
        ))}
    </div>
  );
}
