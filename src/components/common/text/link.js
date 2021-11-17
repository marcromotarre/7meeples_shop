/** @jsxImportSource theme-ui */
import React from "react";

export default function link({ children, onClick = () => {} }) {
  return (
    <h5 onClick={onClick} sx={{ color: "#339BCC" }}>
      {children}
    </h5>
  );
}
