/** @jsxImportSource theme-ui */
import React from "react";
import Image from "next/image";

export default function SectionTitle({ title, icon, styles }) {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: icon ? "auto auto auto" : "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "15px",
        ...styles,
      }}
    >
      {icon && (
        <Image
          alt=""
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={icon}
        ></Image>
      )}
      <h3 sx={{ textAlign: "center" }}>{title}</h3>
      {icon && (
        <Image
          alt=""
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={icon}
        ></Image>
      )}
    </div>
  );
}
