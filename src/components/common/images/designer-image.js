/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { IMAGES_REPOSITORY } from "../../../constants";
import user_male_icon from "../../../assets/svg/user-male.svg";
import { useState } from "react";
import { s3_name } from "../../../utils/name";

export default function DesignerImage({ name, styles }) {
  const [showDefaultImage, setShowDefaultImage] = useState(false);
  const onImageError = () => {
    if (!showDefaultImage) setShowDefaultImage(true);
  };
  return (
    <img
      onError={onImageError}
      sx={{
        border: `${showDefaultImage ? "none" : "1px solid black"}`,
        borderRadius: "50%",
        width: "80%",
        ...styles,
      }}
      src={
        showDefaultImage
          ? user_male_icon
          : `${IMAGES_REPOSITORY}designers/${s3_name(name)}.jpg`
      }
    />
  );
}
