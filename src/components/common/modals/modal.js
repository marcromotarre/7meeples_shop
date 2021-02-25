/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function Loading({ style = {} }) {
  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        opacity: "0.95",
        position: "absolute",
      }}
    ></div>
  );
}
