/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function BoardgameDescription({ styles, description }) {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",
        ...styles,
      }}
    >
      <span sx={{ fontWeight: "100", fontStyle: "italic", fontSize: "14px" }}>
        {description}
      </span>
    </div>
  );
}
