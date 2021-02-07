/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function LoginEmail({ logo, gridArea = "" }) {
  return (
    <div
      sx={{
        gridArea,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={logo.svg} sx={{ width: "100px" }}></img>
      {/*<div sx={{ display: "flex" }}>
        <span sx={{ fontSize: "22px", color: logo.color.gray }}>7</span>
        <span sx={{ fontSize: "22px", color: logo.color.base }}>meeples</span>
      </div>*/}
    </div>
  );
}
