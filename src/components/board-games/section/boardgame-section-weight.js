/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Section from "./boardgame-section";
import icon from "../../../assets/svg/sections/weight.svg";

export default function SectionWeight({ styles, weight = 0 }) {
  const grid_weight = [
    Math.max(0, weight) * 100,
    Math.max(0, weight - 1) * 100,
    Math.max(0, weight - 2) * 100,
    Math.max(0, weight - 3) * 100,
    Math.max(0, weight - 4) * 100,
  ];

  return (
    <Section icon={icon}>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "20px 20px 20px 20px 20px",
          justifyItems: "center",
          alignItems: "center",
          columnGap: "10px",
          ...styles,
        }}
      >
        {grid_weight.map((grid_weight_square, index) => (
          <div
            key={index}
            sx={{
              borderRadius: "4px",
              background: `linear-gradient(to right, #CCCCCC 0%, #CCCCCC ${grid_weight_square}%,#FFFFFF ${
                grid_weight_square + 1
              }%, #FFFFFF 100%)`,
              border: "1px solid black",
              width: "20px",
              height: "20px",
            }}
          ></div>
        ))}
      </div>
    </Section>
  );
}
