/** @jsxImportSource theme-ui */
import React from "react";
import Image from "next/image";

export default function CategoryItemTitle({ title, icon, styles }) {
  return (
    <>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "50px calc(100% - 100px) 50px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          ...styles,
        }}
      >
        <Image
          sx={{ width: "30px", alignSelf: "center", justifySelf: "flex-end" }}
          src={icon}
        />
        <div
          sx={{
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
}
