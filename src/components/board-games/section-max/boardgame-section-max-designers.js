/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/designers.svg";
import { useSelector } from "react-redux";
import Designer from "src/components/designers/designer";

export default function SectionMaxDesigners({ styles, designers = [] }) {
  return (
    <Section
      styles={{ ...styles }}
      name={designers.length > 1 ? "Autores" : "Autor"}
      icon={icon}
      iconStyles={{ marginLeft: "6px" }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "start",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {designers.map((designer) => (
          <Designer
            border={3}
            styles={{
              width: ["26%"],
              maxWidth: "100px",
              marginBottom: "20px",
            }}
            designer={designer}
          ></Designer>
        ))}
      </div>
    </Section>
  );
}
