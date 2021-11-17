/** @jsxImportSource theme-ui */
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-title.svg";
import { Button } from "../common/index";
import SectionTitle from "../sections/section-title";
import CategoriesList from "./categories-list";
import awards_icon from "../../assets/svg/categories/icon.svg";
import categories from "./data/categories";
import React from "react";

export default function CategoriesMain({ styles }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "25px",
        height: "fit-content",
        ...styles,
      }}
    >
      <SectionTitle title={"Categorias"} icon={awards_icon}></SectionTitle>
      <CategoriesList categories={categories}></CategoriesList>
    </div>
  );
}
