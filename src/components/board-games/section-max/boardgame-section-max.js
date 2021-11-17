import React from "react";
/** @jsxImportSource theme-ui */
import information_icon from "../../../assets/svg/information.svg";
import Image from "next/image";

export default function SectionMax({
  onClick,
  icon,
  name,
  children,
  information,
  styles,
}) {
  return (
    <div
      onClick={onClick}
      sx={{
        display: "grid",
        gridTemplateColumns: "100%",
        rowGap: "4px",
        ...styles,
      }}
    >
      <div
        sx={{
          display: "grid",
          gridAutoColumns: "max-content",
          gridAutoFlow: "column",
          justifyItems: "start",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <Image
          sx={{
            width: "18px",
            alignSelf: "center",
          }}
          src={icon}
        />
        <h3 sx={{ fontSize: "19px" }}>{name}</h3>
      </div>

      {children}
    </div>
  );
}
