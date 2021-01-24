/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
export default function MenuItem() {
  return (
    <div
      sx={{
        width: "100%",
        height: "50px",
        display: "flex",
        displayFlex: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          width: "70%",
          height: "100%",
          borderBottom: "1px solid #C7C7C7",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <span sx={{ fontFamily: "Quicksand" }}>Menu Item 1</span>
      </div>
    </div>
  );
}
