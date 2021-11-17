/** @jsxImportSource theme-ui */
import CategoryItem from "./category-item";
import React, { useState } from "react";
import Button from "../common/buttons/button";

export default function CategoriesList({ categories }) {
  const [viewAll, setViewAll] = useState(false);
  const hidden_categories = viewAll
    ? categories
    : categories.filter((a, index) => index < 4);

  const showAll = () => {
    setViewAll(true);
  };
  return (
    <div
      sx={{
        width: "80%",
        display: "grid",
        rowGap: "20px",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div
        sx={{
          width: "100%",
          display: "grid",
          rowGap: "10px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {hidden_categories.map(({ id, name, icon }) => (
          <div sx={{ width: "100%" }} key={name}>
            <CategoryItem id={id} name={name} icon={icon}></CategoryItem>
          </div>
        ))}
      </div>
      {!viewAll && <Button onClick={showAll}>Ver todas</Button>}
    </div>
  );
}
