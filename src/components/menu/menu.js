/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import MenuItem from "./menu-item";
import React, { useState } from "react";
import { openMenu, closeMenu } from "./../../actions";
export default function Menu() {
  const [menuState, setMenuOpenState] = useState("menu-closed");

  const animationMenuEnd = () => {
    if (menuState === "menu-open-animation") {
      setSearchAnimationState("open");
    }
    if (menuState === "menu-close-animation") {
      setSearchAnimationState("menu-close");
    }
  };
  return (
    <div
      className
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </div>
  );
}
