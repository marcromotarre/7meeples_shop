/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-virtual-assistant.svg";

export default function MiaRecomendation({ ...styles }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        ...styles,
      }}
    >
      <img sx={{ width: "80%" }} src={mia_title_icon}></img>
    </div>
  );
}
