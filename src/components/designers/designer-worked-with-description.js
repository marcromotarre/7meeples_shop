/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import DesignerWorkedWithList from "./designer-worked-with-list";
import { get_common_boardgames } from "./utils";
export default function DesignerWorkedWith({
  styles,
  designers = [],
  boardgames,
  ref_designer,
}) {
  const designers_boardgames = designers.map((designer) => {
    return {
      designer,
      boardgames: get_common_boardgames({
        boardgames,
        designers: [ref_designer, designer],
      }),
    };
  });
  const text = `${
    ref_designer.name
  } ha trabajado con ${designers_boardgames.map(
    ({ designer, boardgames }) =>
      ` ${designer.name} (${boardgames.map(({ webname }, index) =>
        index === 0 ? webname : ` ${webname}`
      )})`
  )}`;
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

        <span sx={{ textAlign: "center" }}>{text}</span>
        <DesignerWorkedWithList designers={designers}></DesignerWorkedWithList>
        <div sx={separator}></div>
      </div>
    </>
  );
}
