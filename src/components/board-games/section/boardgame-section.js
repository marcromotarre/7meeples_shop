/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";

export default function Section({ icon, children }) {
  return (
    <div
      sx={{
        width: "100%",
        height: "50px",
        display: "grid",
        gridTemplateColumns: "10% auto 10px 30px 10%",
        gridTemplateAreas: `". section-info . section-icon ."`,
      }}
    >
      <div sx={{ gridArea: "section-info", alignSelf: "center" }}>
        {children}
      </div>
      <img
        sx={{
          gridArea: "section-icon",
          width: "30px",
          height: "30px",
          alignSelf: "center",
        }}
        src={icon}
      />
    </div>
  );
}
