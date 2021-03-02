/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { s3_name } from "../../utils/name";
import { IMAGES_REPOSITORY } from "src/constants";

export default function AwardTitle({ name }) {
  console.log(s3_name(name));
  const icon = `${IMAGES_REPOSITORY}awards/${s3_name(name)}.svg`;
  return (
    <>
      <div
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={icon} />
        <div sx={{ width: "10px" }}></div>
        <span sx={{ fontWeight: "200", textAlign: "center" }}>{name}</span>
        <div sx={{ width: "10px" }}></div>
        <img src={icon} />
      </div>
    </>
  );
}
