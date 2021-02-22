/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
export default function MenuItem({
  className,
  onAnimationEnd,
  text,
  onClick = () => {},
  width = "80%",
  icon,
  margin = "0px",
}) {
  return (
    <div
      onClick={onClick}
      className={className}
      onAnimationEnd={onAnimationEnd}
      sx={{
        width: "100%",
        display: "flex",
        displayFlex: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: "50px",
      }}
    >
      <div
        sx={{
          width: width,
          height: "100%",
          borderBottom: "1px solid #C7C7C7",
          display: "grid",
          gridTemplateColumns: `${margin} auto ${margin}`,
          gridTemplateAreas: `". item ."`,
        }}
      >
        <div
          sx={{
            display: "flex",
            gridArea: "item",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {icon && <img sx={{ paddingRight: "10px" }} src={icon}></img>}
          <span
            sx={{
              fontFamily: "Quicksand",
              fontWeight: "200",
              fontSize: "15px",
              verticalAlign: "super",
            }}
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
