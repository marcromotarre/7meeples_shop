/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function Input({ width = "100%", text, color = "#33BAFB" }) {
  return (
    <div sx={{ width }}>
      <div
        sx={{
          width: "calc(100% - 20px)",
          position: "relative",
          top: "10px",
          left: "10px",
        }}
      >
        <div
          sx={{
            backgroundColor: "white",
            padding: "3px 10px",
            width: "fit-content",
          }}
        >
          <span
            sx={{
              fontSize: "10px",
              color: color,
            }}
          >
            {text}
          </span>
        </div>
      </div>

      <input
        sx={{
          width: "100%",
          border: `1px solid ${color}`,
          borderRadius: "3px",
          height: "43px",
          paddingLeft: "15px",
          fontSize: "15px",
          "&:focus": {
            outline: "none",
          },
        }}
      ></input>
    </div>
  );
}
