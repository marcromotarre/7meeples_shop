/** @jsxImportSource theme-ui */
import { IMAGES_REPOSITORY } from "../../../constants";
import user_male_icon from "../../../assets/svg/user-male.svg";
import React, { useState } from "react";
import Loading from "src/components/common/loading/loading";
import ImageNext from "next/image";

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
        <ImageNext
          alt=""
          onLoad={onImageLoad}
          onError={onImageError}
          layout={"fill"}
          src={src}
        />
      )}
    </>
  );
}
