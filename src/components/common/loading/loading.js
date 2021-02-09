/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import loader from "../../../assets/gif/loader.gif";

export default function Loading() {
  return (
    <img
      src={loader}
      sx={{ height: "50px", gridArea: "button" }}
      alt="loading..."
    />
  );
}
