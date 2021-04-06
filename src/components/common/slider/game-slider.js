/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Boardgame from "src/components/board-games/boardgame-min-fixed-height";
import { useRouter } from "next/router";
import React from "react";
export default function Slider({
  attributes,
  title = "",
  elements = [],
  styles,
}) {
  console.log("elements", elements);
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "start",
        alignItems: "start",
        rowGap: "10px",
        height: "fit-content",
        ...styles,
      }}
    >
      <h3
        sx={{
          paddingLeft: "30px",
        }}
      >
        {title}
      </h3>
      <div
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          sx={{
            position: "relative",
            paddingLeft: "30px",
            paddingBottom: "20px",
            display: "grid",
            width: "100%",
            gridTemplateColumns: [
              `repeat(${elements.length}, 250px) 15px`,
              `repeat(${elements.length}, 20%) 15px`,
            ],
            alignItems: "center",
            justifyItems: "center",
            columnGap: "15px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {elements.map((boardgame) => (
            <>
              {boardgame && (
                <Boardgame
                  styles={{ width: "100%" }}
                  key={boardgame?.id}
                  boardgame={boardgame}
                  attributes={attributes}
                />
              )}
            </>
          ))}
          <div sx={{ height: "100%", width: "10px" }}></div>
        </div>
      </div>
    </div>
  );
}
