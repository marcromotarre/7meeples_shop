/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
export default function MenuItem({ className, onAnimationEnd, index }) {
  return (
    <div
      className={className}
      onAnimationEnd={onAnimationEnd}
      sx={{
        width: "100%",
        display: "flex",
        displayFlex: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
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
        <span sx={{ fontFamily: "Quicksand" }}>Menu Item {index}</span>
      </div>
    </div>
  );
}
