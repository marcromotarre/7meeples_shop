/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
export default function BoardgameDescription({ styles, description }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const showMore = description.split("[VERMAS]").length > 1;
  const resumed_description = description.split("[VERMAS]")[0];
  const all_description = description.replace("[VERMAS]", "");
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "80%",
        ...styles,
      }}
    >
      <p
        sx={{
          fontWeight: "100",
          fontStyle: "italic",
          fontSize: "14px",
          textDecoration: "none",
        }}
      >
        {isShowMore ? all_description : resumed_description}
        {showMore && !isShowMore && (
          <>
            <span
              sx={{
                fontWeight: "100",
                fontStyle: "italic",
                fontSize: "14px",
                textDecoration: "none",
              }}
              onClick={() => setIsShowMore(true)}
            >
              &nbsp;
            </span>
            <span
              sx={{
                fontWeight: "100",
                fontStyle: "italic",
                fontSize: "14px",
                textDecoration: "underline",
              }}
              onClick={() => setIsShowMore(true)}
            >
              Ver más
            </span>
          </>
        )}
      </p>
    </div>
  );
}
