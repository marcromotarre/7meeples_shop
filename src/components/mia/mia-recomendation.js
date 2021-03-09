/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-title.svg";

export default function MiaRecomendation({ title, subtitle }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <h3>{title}</h3>
      <img sx={{ width: "110px" }} src={mia_title_icon}></img>
      <h3>{subtitle}</h3>
    </div>
  );
}
