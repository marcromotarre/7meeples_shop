/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import information_icon from "../../../assets/svg/information.svg";

export default function SectionMax({
  onClick,
  icon,
  name,
  children,
  information,
  styles,
}) {
  return (
    <div
      onClick={onClick}
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
          gridAutoColumns: "max-content",
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
        <h3 sx={{ fontSize: "19px" }}>{name}</h3>
      </div>

      {children}
    </div>
  );
}
