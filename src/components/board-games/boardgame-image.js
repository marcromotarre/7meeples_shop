/** @jsxImportSource theme-ui */
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import { changeSearchValue } from "src/redux/actions/search";
import { simple_string, s3_name } from "src/utils/name";
import { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import loader from "./../../../src/assets/gif/loader.gif";

export default function BoardgameImage({ name, image, imageDefault, styles }) {
  const src = image ? image : imageDefault;
  return (
    <div
      sx={{
        ...styles,
        position: "relative",
      }}
    >
      <Image alt="" objectFit="contain" layout={"fill"} src={src} />
    </div>
  );
}
