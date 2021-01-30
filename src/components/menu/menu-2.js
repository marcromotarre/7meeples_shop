/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import MenuItem from "./menu-item";
import MenuFiller from "./menu-filler";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Menu2() {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
      }}
    ></div>
  );
}
