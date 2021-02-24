/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";

export default function Section({ mechanisms = [] }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {mechanisms.map(({ id, webname, name }) => (
        <span sx={{ color: "#27AAE0", paddingRight: "10px" }} key={id}>
          #{webname ? webname : name}
        </span>
      ))}
    </div>
  );
}
