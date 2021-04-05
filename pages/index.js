/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useSelector } from "react-redux";
import Mia from "../src/components/mia/mia-main";
import CategoriesMain from "../src/components/categories/categories-main";
import Slider from "src/components/common/slider/slider";
import NewnessMain from "../src/components/newness/newness-main.js";
import React, { useState, useEffect } from "react";
import Searcher from "src/components/searcher/searcher";
import SearchList from "src/components/searcher/search-list";
import SaleOfThe from "src/components/main/sale-of-the";
import { useRouter } from "next/router";
import { IMAGES_REPOSITORY } from "src/constants";

export default function Home() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const MOBILE_AREAS = `". searcher searcher searcher ." ". . mia . ." ". . sale-of-the . ." "best-categories best-categories best-categories best-categories best-categories" ". . newness . ."`;
  const onSearchFocus = () => {
    console.log("focus");
  };
  const onSearchBlur = () => {
    console.log("blur");
  };
  const setPlatformInfo = () => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        document.body.classList.add("chrome");
      } else {
        document.body.classList.add("safari");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      setPlatformInfo();
      var inputBox = document.querySelector(".safari #inputBox");
      if (inputBox) {
        inputBox.addEventListener("focus", function (e) {
          document.body.classList.add("keyboard");
          setTimeout(function () {
            window.scrollTo(0, 0);
          }, 200);
        });

        inputBox.addEventListener("blur", function (e) {
          document.body.classList.remove("keyboard");
        });
      }
    });
  });

  const all_families = useSelector((state) => state.familiesReducer.families);
  const families = all_families
    ? all_families
        .filter(({ type }) => type === "Game")
        .map((element) => {
          return {
            ...element,
            image: `${IMAGES_REPOSITORY}families/${element.image}`,
            click: (id, name) => {
              router.push(`/familias/${id}/${name}`);
            },
          };
        })
    : [];
  console.log("families", families);

  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: ["5% 5% auto 5% 5%", "5% auto 300px 5%"],
        rowGap: "35px",
        justifySelf: "center",
        alignSelf: "center",
        gridTemplateAreas: [
          MOBILE_AREAS,
          `". searcher searcher ." ". mia sale-of-the ." "best-categories best-categories best-categories best-categories" ". newness newness ."`,
        ],
      }}
    >
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gridArea: "searcher",
        }}
      >
        <Searcher
          styles={{
            marginTop: "20px",
            zIndex: "3",
            width: searchValue === "" ? "100%" : "90%",
            position: searchValue === "" ? "relative" : "fixed",
          }}
          onChangeValue={(value) => setSearchValue(value)}
          onFocus={onSearchFocus}
          onBlur={onSearchBlur}
        />
        {searchValue && (
          <SearchList
            styles={{
              zIndex: "1",
              marginTop: "70px",
              gridArea: "searcher",
            }}
            searchValue={searchValue}
          />
        )}
      </div>

      {!searchValue && (
        <>
          <Mia
            styles={{
              gridArea: "mia",
            }}
          ></Mia>
          <SaleOfThe
            styles={{
              gridArea: "sale-of-the",
            }}
          ></SaleOfThe>
          <Slider
            elements={families}
            styles={{
              height: ["100%"],
              gridArea: "best-categories",
            }}
          ></Slider>
          {/*<CategoriesMain
            styles={{
              height: ["100%"],
              gridArea: "best-categories",
            }}
          ></CategoriesMain>*/}
          <NewnessMain
            styles={{
              gridArea: "newness",
            }}
          ></NewnessMain>
        </>
      )}
    </div>
  );
}
