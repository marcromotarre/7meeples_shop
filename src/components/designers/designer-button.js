/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import designers_icon from "../../assets/svg/sections/designers.svg";
import DesignerImage from "../common/images/designer-image";
import { useRouter } from "next/router";

export default function DesignerButton({ designer, onClick, styles }) {
  const router = useRouter();
  const clickOnDesigner = () => {
    if (!onClick) {
      router.push(`/autores/${designer.id}`);
    } else {
      onClick({ ...desginer });
    }
  };

  return (
    <div
      onClick={clickOnDesigner}
      sx={{
        width: "100%",
        borderRadius: "1000px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
        padding: "5px 0px",
        ...styles,
      }}
    >
      <div
        sx={{
          display: "grid",
          width: "100%",
          alignItems: "center",
          gridTemplateColumns: "40px calc(100% - 90px) 40px",
          columnGap: "10px",
          ...styles,
        }}
        onClick={onClick}
      >
        <DesignerImage
          styles={{ marginLeft: "5px" }}
          name={designer.name}
        ></DesignerImage>
        <span>{designer.name}</span>
        <img sx={{ marginTop: "0px", height: "20px" }} src={designers_icon} />
      </div>
    </div>
  );
}
