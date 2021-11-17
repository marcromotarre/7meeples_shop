/** @jsxImportSource theme-ui */
import React from "react";

export default function ListItem({
  styles,
  key,
  children,
  onClick = () => {},
}) {
  return (
    <div
      key={key}
      onClick={onClick}
      sx={{
        width: "100%",
        borderRadius: "1000px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
