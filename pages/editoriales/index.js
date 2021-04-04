/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";
import AllPublisherView from "src/views/all-publishers.view.js";
export default function Editoriales() {
  const router = useRouter();
  const all_publishers = useSelector(
    (state) => state.publishersReducer.publishers
  );

  return <AllPublisherView publishers={all_publishers} />;
}
