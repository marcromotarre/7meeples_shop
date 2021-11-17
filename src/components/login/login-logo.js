/** @jsxImportSource theme-ui */
import Image from "next/image";

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
      <Image alt="" src={logo.svg} sx={{ width: "100px" }}></Image>
      {/*<div sx={{ display: "flex" }}>
        <span sx={{ fontSize: "22px", color: logo.color.gray }}>7</span>
        <span sx={{ fontSize: "22px", color: logo.color.base }}>meeples</span>
      </div>*/}
    </div>
  );
}
