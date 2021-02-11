/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

export default function Button({ sx, children, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      sx={{
        ...sx,
        color: "white",
        backgroundColor: "#33BAFB",
        border: "none",
        borderRadius: "3px",
        padding: "10px",
        fontFamily: "Quicksand",
        fontSize: "16px",

        "&:focus": {
          outline: "0",
        },
      }}
    >
      {children}
    </button>
  );
}
