/** @jsxImportSource theme-ui */
import React from "react";

export default function Section({ mechanisms = [] }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {mechanisms.map(({ id, webname, name }) => (
        <span
          sx={{ fontWeight: "100", color: "#27AAE0", paddingRight: "10px" }}
          key={id}
        >
          #{webname ? webname : name}
        </span>
      ))}
    </div>
  );
}
