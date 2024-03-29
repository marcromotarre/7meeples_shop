/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import shopping_bag from "../../assets/svg/shopping-bag.svg";
import logo_red from "../../assets/svg/7meeples-logo-red.svg";
import menu_cross_animation from "../../assets/svg/menu-cross-animation.svg";

import login from "../../assets/svg/menu/login.svg";
import meeplestrenos from "../../assets/svg/menu/meeplestrenos.svg";
import seven_meeples_awards from "../../assets/svg/menu/7meeples-awards.svg";

import React, { useState } from "react";
import { openMenu, closeMenu } from "src/redux/actions/menu";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "../menu/menu-item";
import Search from "../header/search";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

export default function Header() {
  const router = useRouter();
  const [session, loading] = useSession();

  const opened = useSelector((state) => state.open);
  const [animationState, setAnimationState] = useState("menu-close-start");
  const [menuState, setMenuState] = useState("menu-start");
  const [lineState, setLineState] = useState("line-start");
  const [headerExpandAnimationState, setHeaderExpandAnimationState] = useState(
    "header-expand-start"
  );
  const [searchAnimationState, setSearchAnimationState] = useState(
    "search-start"
  );

  const dispatch = useDispatch();

  const clickIcon = () => {
    if (animationState === "menu-close-start") {
      dispatch(openMenu());
      setAnimationState("menu-close-start-animation");
      setLineState("line-start-animation");
    }
    if (animationState === "menu-close-end") {
      setAnimationState("menu-close-end-animation");
      setLineState("line-end-animation");
    }

    if (headerExpandAnimationState === "header-expand-start") {
      setHeaderExpandAnimationState("header-expand-start-animation");
      setMenuState("menu-start-animation");
    }
    if (headerExpandAnimationState === "header-expand-end") {
      setHeaderExpandAnimationState("header-expand-end-animation");
      setMenuState("menu-end-animation");
    }

    /* if (searchAnimationState === "search-start") {
      setSearchAnimationState("search-start-animation");
    }
    if (searchAnimationState === "search-end") {
      setSearchAnimationState("search-end-animation");
    }*/
  };

  const animationEnd = () => {
    if (animationState === "menu-close-start-animation") {
      setAnimationState("menu-close-end");
      setMenuState("menu-end");
    }
    if (animationState === "menu-close-end-animation") {
      dispatch(closeMenu());
      setAnimationState("menu-close-start");
      setMenuState("menu-start");
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

  const animationLineEnd = () => {
    if (lineState === "line-start-animation") {
      setLineState("line-end");
    }
    if (lineState === "line-end-animation") {
      setLineState("line-start");
    }
  };
  /*
  const animationSearchEnd = () => {
    if (searchAnimationState === "search-start-animation") {
      setSearchAnimationState("search-end");
    }
    if (searchAnimationState === "search-end-animation") {
      setSearchAnimationState("search-start");
    }
  };
*/

  const goHome = () => {
    router.push("/");
  };

  const clickOnLoginRegister = () => {
    router.push("/login");
  };

  const clickOnProfile = () => {
    router.push("/profile");
  };

  const clickOnAwards = () => {
    router.push("/awards");
    clickIcon();
  };

  const clickOnMeeplestrenos = () => {
    router.push("/meeplestrenos");
    clickIcon();
  };

  return (
    <>
      <div
        className={headerExpandAnimationState}
        onAnimationEnd={animationHeaderExpandEnd}
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          backgroundColor: "white",
          flexWrap: "wrap",
          zIndex: "100",
        }}
      >
        <style jsx global>
          {`
            body {
              overflow: ${opened ? "hidden" : "auto"};
            }
          `}
        </style>
        <div
          sx={{
            position: "fixed",
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 10px",
            backgroundColor: "white",
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
            onClick={goHome}
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
        {opened && (
          <div sx={{ zIndex: 0, width: "100%", height: "calc(100% - 50px)" }}>
            <Search className={menuState}></Search>
            {!session && (
              <MenuItem
                icon={login}
                className={menuState}
                text={"Login / Register"}
                onClick={clickOnLoginRegister}
              ></MenuItem>
            )}
            {session && (
              <MenuItem
                icon={login}
                className={menuState}
                text={"marc romo"}
                onClick={clickOnProfile}
              ></MenuItem>
            )}
            <MenuItem
              icon={seven_meeples_awards}
              onClick={clickOnAwards}
              className={menuState}
              text={"7meeples Awards"}
            ></MenuItem>
            <MenuItem
              onClick={clickOnMeeplestrenos}
              icon={meeplestrenos}
              className={menuState}
              text={"meeplestrenos"}
            ></MenuItem>
          </div>
        )}
      </div>
      <div
        onAnimationEnd={animationLineEnd}
        className={lineState}
        sx={{
          zIndex: "100",
          pointerEvents: "none",
          position: "fixed",
          width: "100%",
          borderBottom: "1px solid #C7C7C7",
        }}
      ></div>
    </>
  );
}
