/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import loader from "../../../assets/gif/loader.gif";

export default function Loading({ style = {} }) {
  return (
    <img src={loader} sx={{ height: "50px", ...style }} alt="loading..." />
  );
}
