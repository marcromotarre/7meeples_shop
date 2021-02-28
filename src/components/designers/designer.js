/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { IMAGES_REPOSITORY } from "../../constants";
import user_male_icon from "../../assets/svg/user-male.svg";
import { useState } from "react";

export default function Designer({ name, onClick }) {
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
      }}
    >
      <img
        onError={onImageError}
        sx={{
          border: `${showDefaultImage ? "none" : "3px solid black"}`,
          borderRadius: "50%",
          width: "80%",
        }}
        src={
          showDefaultImage
            ? user_male_icon
            : `${IMAGES_REPOSITORY}${name.toLowerCase().replace(" ", "_")}.jpg`
        }
      />
      <p sx={{ textAlign: "center" }}>{name}</p>
    </div>
  );
}
