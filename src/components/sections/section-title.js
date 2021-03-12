/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export default function SectionTitle({ title, icon, styles }) {
  return (
    <>
      <div
        sx={{
          display: "flex",
          width: "80%",
          justifyItems: "center",
          alignItems: "center",
          ...styles,
        }}
      >
        <img sx={{ width: "25px" }} src={icon} />
        <div sx={{ width: "10px" }}></div>
        <h3 sx={{ textAlign: "center", width: "100%" }}>{title}</h3>
        <div sx={{ width: "10px" }}></div>
        <img sx={{ width: "25px" }} src={icon} />
      </div>
    </>
  );
}