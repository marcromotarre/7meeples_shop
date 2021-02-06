/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import logo_red from "../../assets/svg/7meeples-logo-red.svg";

export default function LoginEmail({ logo }) {
  return (
    <div
      sx={{
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
