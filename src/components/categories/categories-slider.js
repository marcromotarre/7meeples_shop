/** @jsxImportSource theme-ui */
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-title.svg";
import { Button } from "../common/index";
import Square from "src/components/common/slider/square";
import SectionTitle from "../sections/section-title";
import CategoriesList from "./categories-list";
import awards_icon from "../../assets/svg/categories/icon.svg";
import { IMAGES_REPOSITORY } from "src/constants";
import { useRouter } from "next/router";
import React from "react";

export default function Slider({ styles }) {
  const router = useRouter();
  const all_families = useSelector((state) => state.familiesReducer.families);
  const clickOnFamily = (id, name) => {
    router.push(`/familias/${id}/${name}`);
  };
  const onlyImportantFamilies = all_families.filter(
    ({ type }) => type === "Game"
  );
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "start",
        alignItems: "start",
        rowGap: "25px",
        height: "fit-content",
        ...styles,
      }}
    >
      <h3
        sx={{
          paddingLeft: "30px",
        }}
      >
        Colecciones
      </h3>
      <div
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          sx={{
            position: "relative",
            paddingLeft: "30px",
            paddingBottom: "20px",
            display: "grid",
            width: "100%",
            gridTemplateColumns: [
              `repeat(${onlyImportantFamilies.length}, 40%) 15px`,
              `repeat(${onlyImportantFamilies.length}, 20%) 15px`,
            ],
            alignItems: "center",
            justifyItems: "center",
            columnGap: "15px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {onlyImportantFamilies.map(({ image, color, webname, id, full }) => (
            <Square
              image={`${IMAGES_REPOSITORY}families/${image}`}
              color={color}
              name={webname}
              id={id}
              full={full}
              showName={true}
              onClick={clickOnFamily}
            />
          ))}
          <div sx={{ height: "100%", width: "10px" }}></div>
        </div>
      </div>
    </div>
  );
}
