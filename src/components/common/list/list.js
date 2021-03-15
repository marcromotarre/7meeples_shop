/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { Button } from "..";

export default function List({
  styles,
  children,
  defaultNumberElements = children.length,
}) {
  const [showAllListElements, setShowAllListElements] = useState(false);
  const childrenToShow = showAllListElements
    ? children
    : children.filter(({}, index) => index < defaultNumberElements);
  return (
    <>
      <div
        sx={{
          display: "grid",
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
          rowGap: "20px",
          ...styles,
        }}
      >
        <div
          sx={{
            display: "grid",
            width: "100%",
            justifyItems: "center",
            alignItems: "center",
            rowGap: "10px",
            ...styles,
          }}
        >
          {childrenToShow.map((element, index) => (
            <div
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {element}
            </div>
          ))}
          {!showAllListElements && children.length > defaultNumberElements && (
            <Button onClick={() => setShowAllListElements(true)}>
              Ver todos
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
