/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { s3_name } from "../../utils/name";
import { IMAGES_REPOSITORY } from "src/constants";
import Category from "./category";

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
          <Category id={id} name={name} icon={icon}></Category>
        </div>
      ))}
    </div>
  );
}
