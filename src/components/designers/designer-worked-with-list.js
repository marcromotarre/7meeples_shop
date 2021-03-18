/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Designer from "./designer";
import { useSelector } from "react-redux";
import { DEVICES } from "@utils/media-querys";
export default function DesignerWorkedWith({ designers = [], styles }) {
  const device = useSelector((state) => state.deviceReducer.device);

  let designersPerRow = 3;
  let desginerWidthPercentatge = 26;
  if (device === DEVICES.TABLET || device === DEVICES.LAPTOP) {
    designersPerRow = 5;
    desginerWidthPercentatge = 15;
  } else if (device === DEVICES.DESKTOP) {
    designersPerRow = 5;
  } else if (device === DEVICES.DESKTOP_LARGE) {
    designersPerRow = 5;
  } else if (device === DEVICES.DESKTOP_LARGE) {
    designersPerRow = 5;
  }
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
            width: `${desginerWidthPercentatge}%`,
            maxWidth: "100%",
            marginBottom: "20px",
          }}
          designer={designer}
        ></Designer>
      ))}
    </div>
  );
}
