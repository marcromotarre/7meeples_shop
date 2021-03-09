/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export default function CategoryTitle({ title, icon, styles }) {
  return (
    <>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "30px auto 30px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          ...styles,
        }}
      >
        <img sx={{ width: "25px" }} src={icon} />
        <div
          sx={{
            width: "100%",
            displa: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
}
