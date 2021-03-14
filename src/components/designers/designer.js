/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { IMAGES_REPOSITORY } from "../../constants";
import user_male_icon from "../../assets/svg/user-male.svg";
import { useState } from "react";
import { s3_name } from "../../utils/name";

export default function Designer({ name, onClick, styles }) {
  const [showDefaultImage, setShowDefaultImage] = useState(false);
  const onImageError = () => {
    if (!showDefaultImage) setShowDefaultImage(true);
  };
  return (
    <div
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
          border: `${showDefaultImage ? "none" : "1px solid black"}`,
          borderRadius: "50%",
          width: "80%",
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
