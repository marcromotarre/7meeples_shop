/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import DesignerWorkedWithList from "./designer-worked-with-list";
export default function DesignerWorkedWith({ styles, designers = [] }) {
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  return (
    <>
      <div
        sx={{
          display: "grid",
          rowGap: "20px",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          ...styles,
        }}
      >
        <div sx={separator}></div>

        <span sx={{ textAlign: "center" }}>
          dj cdhjdc jhd j djd cjdjkcfrkjc cnj jcd dj cdbj cdc cd dbndc dbn
          dcnbcdd cdbm cdm cdmdc b cdmsnbdx xsb xxs xjs j b sj sxbsx sssbs
        </span>
        <DesignerWorkedWithList designers={designers}></DesignerWorkedWithList>
        <div sx={separator}></div>
      </div>
    </>
  );
}
