/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import title from "../../assets/svg/awards/title.svg";
import icon from "../../assets/svg/awards/icon.svg";
export default function AwardHeader() {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <img sx={{ width: "50%" }} src={title}></img>
      <img src={icon}></img>
    </div>
  );
}
