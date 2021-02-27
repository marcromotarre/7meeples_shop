/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function Option({
  onClick = () => {},
  title = "",
  text,
  selected = false,
}) {
  return (
    <div
      onClick={onClick}
      sx={{
        padding: "10px",
        width: "100%",
        border: "1px solid #707070",
        borderRadius: "8px",
      }}
    >
      <p sx={{ fontWeight: "200", fontSize: "15px" }}>{title}</p>
      <p
        sx={{
          fontWeight: "100",
          fontStyle: "italic",
          fontSize: "12px",
          color: "#717070",
        }}
      >
        {text}
      </p>
    </div>
  );
}
