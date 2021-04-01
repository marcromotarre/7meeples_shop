/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import { changeSearchValue } from "src/redux/actions/search";
import { simple_string, s3_name } from "src/utils/name";
import React, { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import { useSwipeable } from "react-swipeable";
import Flow from "src/components/common/flow/flow";
import Image from "src/components/common/images/image";
import BoardgameImage from "./boardgame-image";

export default function BoardgameImageCarousel({
  image,
  name,
  imageDefault,
  styles,
  width,
  height,
  images = [],
}) {
  const slide = (dir) => {
    if (dir === "NEXT" && actualStep < carouselImages.length - 1) {
      setActualStep(actualStep + 1);
      setGoToStep(carouselImages[actualStep + 1]);
    }
    if (dir === "PREV" && actualStep > 0) {
      setActualStep(actualStep - 1);
      setGoToStep(carouselImages[actualStep - 1]);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide("NEXT"),
    onSwipedRight: () => slide("PREV"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const otherImages = images ? images : [];
  const carouselImages = [
    image ? `${IMAGES_REPOSITORY}boardgames/${image}` : imageDefault,
    ...otherImages.map((image) => `${IMAGES_REPOSITORY}boardgames/${image}`),
  ];
  const [goToStep, setGoToStep] = useState(carouselImages[0]);
  const [actualStep, setActualStep] = useState(0);
  return (
    <div
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height,
        ...styles,
      }}
      {...handlers}
    >
      <Flow goToStep={goToStep} steps={carouselImages}>
        {carouselImages.map((carouselImage) => (
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              styles={{
                gridArea: "image",
                maxHeight: "300px",
                maxWidth: "80%",
              }}
              src={carouselImage}
            />
          </div>
        ))}
      </Flow>
      <div
        sx={{
          position: "absolute",
          width: "20%",
          height: "100%",
          left: 0,
          background:
            "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
        }}
      ></div>
      <div
        sx={{
          position: "absolute",
          width: "20%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          right: 0,
        }}
      ></div>
    </div>
  );
}
