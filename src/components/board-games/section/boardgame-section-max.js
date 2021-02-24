/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import information_icon from "../../../assets/svg/information.svg";

export default function Section({ icon, name, children, information, styles }) {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "100%",
        rowGap: "4px",
        ...styles,
      }}
    >
      <div
        sx={{
          display: "grid",
          gridAutoColumns: "min-content",
          gridAutoFlow: "column",
          justifyItems: "start",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <img
          sx={{
            width: "18px",
            alignSelf: "center",
          }}
          src={icon}
        />
        <span sx={{ fontSize: "19px" }}>{name}</span>
        <img
          sx={{
            width: "15px",
            height: "15px",
            alignSelf: "center",
          }}
          src={information_icon}
        />
      </div>

      {children}
    </div>
  );
}
