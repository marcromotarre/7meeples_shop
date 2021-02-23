/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
export default function AwardTitle({ name, icon }) {
  return (
    <>
      <div
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={icon} />
        <div sx={{ width: "10px" }}></div>
        <span sx={{ fontWeight: "200" }}>{name}</span>
        <div sx={{ width: "10px" }}></div>
        <img src={icon} />
      </div>
    </>
  );
}
