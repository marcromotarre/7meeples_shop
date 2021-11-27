/** @jsxImportSource theme-ui */
import { s3_name } from "src/utils/name";
import React from "react";
import Image from "next/image";

export default function Square({
  id,
  name = "",
  image,
  full = false,
  color = "#fff",
  styles: parentStyles,
  onClick = () => {},
  showName = false,
}) {
  return (
    <div
      key={id}
      onClick={() => onClick(id, s3_name(name))}
      sx={styles({ parentStyles, showName }).global}
    >
      <div sx={styles({ color }).roundedBox}>
        <div sx={styles().innerBox}>
          <div sx={styles({ full }).image}>
            <Image
              layout={"fill"}
              objectFit="contain"
              alt=""
              src={image.src ? image.src : image}
            />
          </div>
        </div>
      </div>
      {showName && (
        <div>
          <p>{name ? name : " . "}</p>
        </div>
      )}
    </div>
  );
}

const styles = ({ parentStyles, showName, full, color } = {}) => ({
  global: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "100%",
    gridTemplateRows: showName ? "auto auto" : "auto",
    alignItems: "center",
    rowGap: "10px",
    justifyItems: "center",
    ...parentStyles,
  },
  roundedBox: {
    borderRadius: "10px",
    boxShadow: "rgb(0 0 0 / 10%) 0px 10px 10px",
    width: "100%",
    position: "relative",
    paddingTop: "100%",
    display: "flex",
    background: color,
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "relative",
    borderRadius: full ? "10px" : "0px",
    display: "block",
    maxWidth: full ? "100%" : "90%",
    width: "1000px",
    height: "1000px",
    maxHeight: full ? "100%" : "90%",
  },
});
