/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
export default function CategoryDescription({ description }) {
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  const getHTML = ({ element, properties, index }) => {
    if (element === "span") {
      return (
        <span sx={properties.sx} key={index}>
          {properties.text}
        </span>
      );
    }
    if (element === "img") {
      return <img key={index} sx={properties.sx} src={properties.icon} />;
    }
  };

  return (
    <>
      {description && (
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

          {description.map(({ element, properties }, index) =>
            getHTML({ element, properties, index })
          )}
          <div sx={separator}></div>
        </div>
      )}
    </>
  );
}
