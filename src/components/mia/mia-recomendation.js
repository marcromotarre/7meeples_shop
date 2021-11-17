/** @jsxImportSource theme-ui */
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-virtual-assistant.svg";
import Image from "next/image";

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
      <Image alt="" sx={{ width: "80%" }} src={mia_title_icon}></Image>
    </div>
  );
}
