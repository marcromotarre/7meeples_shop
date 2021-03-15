/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { IMAGES_REPOSITORY } from "../../constants";
import user_male_icon from "../../assets/svg/user-male.svg";
import { useState } from "react";
import { s3_name } from "../../utils/name";
import { useRouter } from "next/router";

export default function Designer({ designer, onClick, styles, border = "1" }) {
  const router = useRouter();
  const { name } = designer;
  const [showDefaultImage, setShowDefaultImage] = useState(false);
  const onImageError = () => {
    if (!showDefaultImage) setShowDefaultImage(true);
  };

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
        display: "grid",
        gridTemplateColumns: "100%",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
        ...styles,
      }}
    >
      <img
        onError={onImageError}
        sx={{
          border: `${showDefaultImage ? "none" : `${border}px solid black`}`,
          borderRadius: "50%",
          width: "100%",
        }}
        src={
          showDefaultImage
            ? user_male_icon
            : `${IMAGES_REPOSITORY}designers/${s3_name(name)}.jpg`
        }
      />
      <h3 sx={{ textAlign: "center" }}>{name}</h3>
    </div>
  );
}
