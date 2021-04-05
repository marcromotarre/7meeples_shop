/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";
import AllFamiliesView from "src/views/all-families.view.js";
export default function Familias() {
  const router = useRouter();
  const all_families = useSelector((state) => state.familiesReducer.families);

  return <AllFamiliesView families={all_families} />;
}
