import React from "react";
/** @jsxImportSource theme-ui */
import Image from "next/image";

export default function Section({
  icon,
  children,
  onClick = () => {},
  iconStyles = {},
}) {
  return (
    <div
      onClick={onClick}
      sx={{
        width: "100%",
        height: "50px",
        display: "grid",
        gridTemplateColumns: "10% calc(80% - 40px) 10px 30px 10%",
        gridTemplateAreas: icon
          ? `". section-info . section-icon ."`
          : `". section-info section-info section-info ."`,
      }}
    >
      <div sx={{ gridArea: "section-info", alignSelf: "center" }}>
        {children}
      </div>
      {icon && (
        <Image
          sx={{
            gridArea: "section-icon",
            width: "30px",
            height: "30px",
            alignSelf: "center",
            ...iconStyles,
          }}
          src={icon}
        />
      )}
    </div>
  );
}
