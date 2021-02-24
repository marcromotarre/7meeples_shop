/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function BoardgameDescription({ description }) {
  console.log("description", description);
  let fontSize = "24px;";
  if (name.length > 18) {
    fontSize = "22px";
  }
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",
      }}
    >
      <span sx={{ fontWeight: "100", fontStyle: "italic", fontSize: "14px" }}>
        {description}
      </span>
    </div>
  );
}
