/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export default function SectionTitle({ title, icon, styles }) {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: icon ? "auto auto auto" : "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "15px",
        ...styles,
      }}
    >
      {icon && (
        <img
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={icon}
        ></img>
      )}
      <h3 sx={{ textAlign: "center" }}>{title}</h3>
      {icon && (
        <img
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={icon}
        ></img>
      )}
    </div>
  );
}
