/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import SectionTitle from "../sections/section-title";
import newness_icon from "../../assets/svg/newness/icon.svg";

export default function NewnessMain() {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      <SectionTitle
        title={"Las últimas novedades"}
        icon={newness_icon}
      ></SectionTitle>
    </div>
  );
}
