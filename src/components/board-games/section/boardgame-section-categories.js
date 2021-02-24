/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";

export default function Section({ categories = [] }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {categories.map(({ id, webname, name }) => (
        <span
          sx={{ fontWeight: "100", color: "#27AAE0", paddingRight: "10px" }}
          key={id}
        >
          #{webname ? webname : name}
        </span>
      ))}
    </div>
  );
}
