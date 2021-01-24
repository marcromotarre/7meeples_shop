/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import menu_icon from "../../assets/svg/menu-icon.svg";
import shopping_bag from "../../assets/svg/shopping-bag.svg";
import animation from "../../assets/svg/animation.svg";
import logo_red from "../../assets/svg/7meeples-logo-red.svg";
import search_icon from "../../assets/svg/search.svg";
import menu_cross_animation from "../../assets/svg/menu-cross-animation.svg";
import React, { useState } from "react";
import { openMenu, closeMenu } from "src/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const opened = useSelector((state) => state.open);
  const [animationState, setAnimationState] = useState("menu-close-start");
  const [headerExpandAnimationState, setHeaderExpandAnimationState] = useState(
    "header-expand-start"
  );
  const [searchAnimationState, setSearchAnimationState] = useState(
    "search-start"
  );

  const dispatch = useDispatch();

  const clickIcon = () => {
    if (animationState === "menu-close-start") {
      setAnimationState("menu-close-start-animation");
    }
    if (animationState === "menu-close-end") {
      setAnimationState("menu-close-end-animation");
    }

    if (headerExpandAnimationState === "header-expand-start") {
      setHeaderExpandAnimationState("header-expand-start-animation");
    }
    if (headerExpandAnimationState === "header-expand-end") {
      setHeaderExpandAnimationState("header-expand-end-animation");
    }

    if (searchAnimationState === "search-start") {
      setSearchAnimationState("search-start-animation");
    }
    if (searchAnimationState === "search-end") {
      setSearchAnimationState("search-end-animation");
    }
  };

  const animationEnd = () => {
    if (animationState === "menu-close-start-animation") {
      setAnimationState("menu-close-end");
      dispatch(openMenu());
    }
    if (animationState === "menu-close-end-animation") {
      setAnimationState("menu-close-start");
      dispatch(closeMenu());
    }
  };

  const animationHeaderExpandEnd = () => {
    if (headerExpandAnimationState === "header-expand-start-animation") {
      setHeaderExpandAnimationState("header-expand-end");
    }
    if (headerExpandAnimationState === "header-expand-end-animation") {
      setHeaderExpandAnimationState("header-expand-start");
    }
  };

  const animationSearchEnd = () => {
    if (searchAnimationState === "search-start-animation") {
      setSearchAnimationState("search-end");
    }
    if (searchAnimationState === "search-end-animation") {
      setSearchAnimationState("search-start");
    }
  };

  return (
    <>
      <div
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px",
          zIndex: "100",
        }}
      >
        <div
          sx={{
            width: "30px",
            height: "30px",
            backgroundImage: "url(" + `${menu_cross_animation}` + ")",
            backgroundSize: "cover",
            zIndex: "100",
          }}
          onClick={clickIcon}
          onAnimationEnd={animationEnd}
          className={animationState}
        ></div>
        <img
          sx={{
            height: "60%",
          }}
          src={logo_red}
          alt="shopping bag"
        />
        <img
          sx={{
            height: "40%",
          }}
          src={shopping_bag}
          alt="shopping bag"
        />
      </div>
      <div
        sx={{
          width: "100%",
          display: "flex",
          borderBottom: "1px solid #C7C7C7",
          alignItems: "center",
          justifyContent: "center",
        }}
        onAnimationEnd={animationHeaderExpandEnd}
        className={headerExpandAnimationState}
      >
        <div
          onAnimationEnd={animationSearchEnd}
          className={searchAnimationState}
          sx={{
            display: "flex",
            width: "95%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            sx={{
              width: "100%",
              height: "24px",
              borderRadius: "6px",
              border: "0",
              outline: "none",
              backgroundColor: "#F7F7F7",
              paddingLeft: "30px",
              fontFamily: "Quicksand",
              fontSize: "12px",
            }}
            type="text"
            id="lname"
            name="lname"
            placeholder="Buscar en 7meeples.es"
          />
          <img
            sx={{
              position: "absolute",
              left: "20px",
              height: "10px",
            }}
            src={search_icon}
            alt="buscar"
          />
        </div>
      </div>
    </>
  );
}
