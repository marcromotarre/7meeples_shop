/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Designer from "./designer";
import { useSelector } from "react-redux";
import { DEVICES } from "@utils/media-querys";
export default function DesignerWorkedWith({ designers = [], styles }) {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        ...styles,
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
  );
}
