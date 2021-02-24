/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";

export default function Section({ designers = [] }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {designers.map(({ id, webname, name }, index) => (
        <span sx={{ fontWeight: "100", paddingRight: "10px" }} key={id}>
          {webname ? webname : name}
          {index === designers.length - 1 ? "" : ","}
        </span>
      ))}
    </div>
  );
}
