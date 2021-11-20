/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import { changeSearchValue } from "src/redux/actions/search";
import { simple_string, s3_name } from "src/utils/name";
import React, { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import { useSwipeable } from "react-swipeable";
import Flow from "src/components/common/flow/flow";
import Image from "next/image";
import BoardgameImage from "./boardgame-image";

export default function BoardgameImageCarousel({
  image,
  imageDefault,
  styles,
  height,
  images = [],
}) {
  const [animation, setAnimation] = useState(false);
  const [className, setClassName] = useState("static");
  const [index, setIndex] = useState(0);

  const slide = (dir) => {
    if (dir === "NEXT" && index < carouselImages.length - 1 && !animation) {
      setAnimation(true);
      setClassName("left-to-right");
    } else if (dir === "PREV" && index > 0 && !animation) {
      setAnimation(true);
      setClassName("right-to-left");
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

  const animationEnd = () => {
    setAnimation(false);
    if (className === "left-to-right") {
      setIndex(index + 1);
    } else if (className === "right-to-left") {
      setIndex(index - 1);
    }
    setClassName("static");
  };
  return (
    <div
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height,
        overflow: "hidden",
        ...styles,
      }}
      {...handlers}
    >
      <div
        onAnimationEnd={animationEnd}
        className={className}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {style(index)}
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "100% 100% 100% 100%",
            gridTemplateRows: "100%",
            height: "100%",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {carouselImages.map((ci, index) => (
            <div
              key={index}
              sx={{
                position: "relative",
                maxHeight: "300px",
                maxWidth: "80%",
                width: "1000px",
                height: "1000px",
              }}
            >
              <Image
                priority={true}
                objectFit="contain"
                layout={"fill"}
                src={ci}
              />
            </div>
          ))}
        </div>
      </div>
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

const style = (index) => (
  <style jsx global>
    {`
      .static {
        left: -${index * 100}%;
      }
      .left-to-right {
        animation: left-to-right-animation 0.4s normal;
        animation-timing-function: ease;
      }
      .right-to-left {
        animation: right-to-left-animation 0.4s normal;
        animation-timing-function: ease;
      }

      @keyframes left-to-right-animation {
        0% {
          left: -${index * 100}%;
        }

        100% {
          left: -${100 * (index + 1)}%;
        }
      }

      @keyframes right-to-left-animation {
        0% {
          left: -${100 * index}%;
        }

        100% {
          left: -${100 * (index - 1)}%;
        }
      }
    `}
  </style>
);
