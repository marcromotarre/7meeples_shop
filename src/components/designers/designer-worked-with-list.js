/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Designer from "./designer";
export default function DesignerWorkedWith({ designers = [] }) {
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {designers.map((designer) => (
        <Designer
          border={3}
          styles={{
            width: "26%",
            maxWidth: "100%",
            marginBottom: "20px",
          }}
          designer={designer}
        ></Designer>
      ))}
    </div>
  );
}
