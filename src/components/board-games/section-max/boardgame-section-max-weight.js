import React from "react";
/** @jsxImportSource theme-ui */
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/weight.svg";

export default function SectionMaxWeight({ styles, weight = 0 }) {
  const grid_weight = [
    Math.max(0, weight) * 100,
    Math.max(0, weight - 1) * 100,
    Math.max(0, weight - 2) * 100,
    Math.max(0, weight - 3) * 100,
    Math.max(0, weight - 4) * 100,
  ];

  return (
    <Section styles={{ ...styles }} name={"Dificultad"} icon={icon}>
      <div
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "20px 20px 20px 20px 20px",
          justifyItems: "center",
          alignItems: "center",
          columnGap: "10px",
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
