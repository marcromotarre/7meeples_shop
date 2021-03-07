/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { s3_name } from "../../utils/name";
import { IMAGES_REPOSITORY } from "src/constants";
import CategoryTitle from "./category-title";

export default function CategoriesList({ categories }) {
  return (
    <div
      sx={{
        width: "80%",
        display: "grid",
        rowGap: "10px",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {categories.map(({ name, icon }) => (
        <div sx={{ width: "100%" }} key={name}>
          <CategoryTitle name={name} icon={icon}></CategoryTitle>
        </div>
      ))}
    </div>
  );
}
