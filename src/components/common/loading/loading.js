/** @jsxImportSource theme-ui */
import React from "react";
import Image from "next/image";
import loader from "../../../assets/gif/loader.gif";

export default function Loading({ style = {} }) {
  return (
    <Image src={loader} sx={{ height: "50px", ...style }} alt="loading..." />
  );
}
