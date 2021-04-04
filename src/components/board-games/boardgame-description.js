/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
export default function BoardgameDescription({ styles, description }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const showMore = description.split("[VERMAS]").length > 1;
  const resumed_description = description.split("[VERMAS]")[0];
  const all_description = description.replace("[VERMAS]", "");

  const resumedDescription = () => (
    <p
      sx={{
        fontWeight: "100",
        fontStyle: "italic",
        fontSize: "14px",
        textDecoration: "none",
      }}
    >
      {resumed_description}
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
  );

  const allDescription = () => (
    <div
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {all_description.split("<br>").map((paragraph) => (
        <>
          {paragraph.length === 0 ? (
            <p
              sx={{
                fontWeight: "100",
                fontStyle: "italic",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              &nbsp;
            </p>
          ) : (
            <p
              sx={{
                fontWeight: "100",
                fontStyle: "italic",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              {paragraph}
            </p>
          )}
        </>
      ))}
      <p
        sx={{
          fontWeight: "100",
          fontStyle: "italic",
          fontSize: "14px",
          textDecoration: "none",
        }}
      >
        &nbsp;
      </p>
      <span
        sx={{
          fontWeight: "100",
          fontStyle: "italic",
          fontSize: "14px",
          textDecoration: "underline",
        }}
        onClick={() => setIsShowMore(false)}
      >
        Ver menos
      </span>
    </div>
  );

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
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
        {isShowMore ? allDescription() : resumedDescription()}
      </p>
    </div>
  );
}
