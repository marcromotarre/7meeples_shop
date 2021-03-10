/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import CategoryItem from "./category-item";

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
      {categories.map(({ id, name, icon }) => (
        <div sx={{ width: "100%" }} key={name}>
          <CategoryItem id={id} name={name} icon={icon}></CategoryItem>
        </div>
      ))}
    </div>
  );
}
