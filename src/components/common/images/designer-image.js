/** @jsxImportSource theme-ui */
import React from "react";
import { IMAGES_REPOSITORY } from "../../../constants";
import user_male_icon from "../../../assets/svg/user-male.svg";
import { useState } from "react";
import { s3_name } from "../../../utils/name";
import Image from "next/image";

export default function DesignerImage({ name, styles, border }) {
  const [showDefaultImage, setShowDefaultImage] = useState(false);
  const onImageError = () => {
    if (!showDefaultImage) setShowDefaultImage(true);
  };
  return (
    <Image
      onError={onImageError}
      sx={{
        border: `${border}px solid black`,
        borderRadius: "50%",
        width: "100%",
        height: "auto",
        maxWidth: "100%",
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
