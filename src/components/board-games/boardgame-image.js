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

export default function BoardgameImage({ name, imageDefault, styles }) {
  return (
    <div
      sx={{
        position: "relative",
        ...styles,
      }}
    >
      <Image
        alt=""
        objectFit="contain"
        layout={"fill"}
        src={`${IMAGES_REPOSITORY}boardgames/${s3_name(name)}.jpg`}
      ></Image>
    </div>
  );
}
