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
import { IMAGES_REPOSITORY } from "src/constants";

export default function Slider({ styles }) {
  const all_families = useSelector((state) => state.familiesReducer.families);
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
            gridTemplateColumns: `repeat(${onlyImportantFamilies.length}, 40%) 15px`,
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
          {onlyImportantFamilies.map(({ image, color, name, id, full }) => (
            <div
              key={id}
              sx={{
                borderRadius: "10px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 10px 10px",
                width: "100%",
                position: "relative",
                paddingTop: "100%",
                display: "flex",
                background: color,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                sx={{
                  position: "absolute",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  sx={{
                    borderRadius: full ? "10px" : "0px",
                    display: "block",
                    width: full ? "100%" : "90%",
                    height: "auto",
                    maxHeight: full ? "100%" : "90%",
                    objectFit: "contain",
                  }}
                  src={`${IMAGES_REPOSITORY}families/${image}`}
                ></img>
              </div>
            </div>
          ))}
          <div sx={{ height: "100%", width: "10px" }}></div>
        </div>
      </div>
    </div>
  );
}
