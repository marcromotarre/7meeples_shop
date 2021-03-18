/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import DesignerWorkedWithList from "./designer-worked-with-list";
export default function DesignerWorkedWith({ designers = [] }) {
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
          width: "80%",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div sx={separator}></div>

        <span sx={{ fontWeight: "100", textAlign: "center", width: "80%" }}>
          dj cdhjdc jhd j djd cjdjkcfrkjc cnj jcd dj cdbj cdc cd dbndc dbn
          dcnbcdd cdbm cdm cdmdc b cdm
        </span>
        <DesignerWorkedWithList designers={designers}></DesignerWorkedWithList>
        <div sx={separator}></div>
      </div>
    </>
  );
}
