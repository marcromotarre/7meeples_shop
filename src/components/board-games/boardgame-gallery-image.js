/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { get_boardgames } from "../../backend/boardgames";
import Image from "next/image";

export default function BoardgameGalleryImage({ images }) {
  let fontSize = "24px;";
  if (name.length > 18) {
    fontSize = "22px";
  }
  return (
    <div
      sx={{
        display: "flex",
        flexFlow: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images &&
        images.map((image, index) => (
          <div key={index} sx={{ height: "auto", width: "90%" }}>
            <div
              sx={{
                width: "100%",
                height: "0",
                paddingBottom: "100%",
                maxHeight: "auto",
                minWidth: "0",
                position: "relative",
              }}
            >
              <Image objectFit="contain" layout={"fill"} alt="" src={image} />
            </div>
          </div>
        ))}
    </div>
  );
}
