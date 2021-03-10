/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { recomendations } from "../../mia/recomendations";
import { useSelector, useDispatch } from "react-redux";
import mia_title_icon from "../../assets/svg/mia/mia-title.svg";
import { Button } from "../common/index";
import SectionTitle from "../sections/section-title";
import CategoriesList from "./categories-list";
import awards_icon from "../../assets/svg/categories/icon.svg";
import categories from "./data/categories";

export default function CategoriesMain() {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      <SectionTitle
        title={"Los mejores por categorias"}
        icon={awards_icon}
      ></SectionTitle>
      <CategoriesList categories={categories}></CategoriesList>
    </div>
  );
}
