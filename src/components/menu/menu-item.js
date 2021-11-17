/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Image from "next/image";
export default function MenuItem({
  key = "",
  className,
  onAnimationEnd,
  text,
  onClick = () => {},
  width = "80%",
  height = "50px",
  icon,
  margin = "0px",
}) {
  return (
    <div
      key={key}
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
        height,
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
          {icon && (
            <Image alt="" sx={{ paddingRight: "10px" }} src={icon}></Image>
          )}
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
