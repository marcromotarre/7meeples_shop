/** @jsxImportSource theme-ui */
import { IMAGES_REPOSITORY } from "../../constants";
import user_male_icon from "../../assets/svg/user-male.svg";
import { useState } from "react";
import { s3_name } from "../../utils/name";
import { useRouter } from "next/router";
import DesignerImage from "../common/images/designer-image";

export default function Designer({ designer, onClick, styles, border = "1" }) {
  const router = useRouter();
  const { name } = designer;

  const clickOnDesigner = () => {
    if (!onClick) {
      router.push(`/autores/${designer.id}/${designer.name}`);
    } else {
      onClick({ ...desginer });
    }
  };
  return (
    <div
      onClick={clickOnDesigner}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "100%",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
        ...styles,
      }}
    >
      <DesignerImage
        styles={{}}
        border={border}
        name={designer.name}
      ></DesignerImage>
      <h3 sx={{ textAlign: "center" }}>{name}</h3>
    </div>
  );
}
