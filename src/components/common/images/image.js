/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { IMAGES_REPOSITORY } from "../../../constants";
import user_male_icon from "../../../assets/svg/user-male.svg";
import React, { useState } from "react";
import Loading from "src/components/common/loading/loading";

export default function Image({ src, styles = {} }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const onImageLoad = () => {
    console.log("loaded");
    setLoading(false);
  };
  const onImageError = () => {
    console.log("error");
    setError(true);
  };

  return (
    <>
      {error && (
        <div
          sx={{ width: "100%", height: "100%", backgroundColor: "red" }}
        ></div>
      )}
      {loading && (
        <Loading
          style={{
            height: "150px",
            alignSelf: "center",
            justifySelf: "center",
          }}
        />
      )}
      {!error && (
        <img
          onLoad={onImageLoad}
          onError={onImageError}
          sx={{
            ...styles,
            opacity: loading ? "0" : "1",
            position: loading ? "absolute" : "relative",
          }}
          src={src}
        />
      )}
    </>
  );
}
