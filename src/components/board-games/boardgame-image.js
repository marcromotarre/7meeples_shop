/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import { changeSearchValue } from "src/redux/actions/search";
import { simple_string, s3_name } from "src/utils/name";
import { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";

export default function BoardgameImage({ name, imageDefault, styles }) {
  return (
    <img
      sx={{
        ...styles,
      }}
      src={`${IMAGES_REPOSITORY}boardgames/${s3_name(name)}.jpg`}
    ></img>
  );
}
