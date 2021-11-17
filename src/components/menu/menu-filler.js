/** @jsxImportSource theme-ui */
import React, { useState } from "react";
export default function MenuFiller({ className, onAnimationEnd }) {
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
        flexGrow: "1",
      }}
    ></div>
  );
}
