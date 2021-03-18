/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
export default function Description({ description = "" }) {
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  return (
    <>
      <div
        sx={{
          display: "grid",
          rowGap: "20px",
          flexDirection: "column",
          width: "80%",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div sx={separator}></div>

        <span sx={{ fontWeight: "100", textAlign: "center", width: "80%" }}>
          {description}
        </span>
        <div sx={separator}></div>
      </div>
    </>
  );
}
