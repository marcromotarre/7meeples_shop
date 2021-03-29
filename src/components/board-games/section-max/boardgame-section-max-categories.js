/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/categories.svg";
import { useRouter } from "next/router";
import { s3_name } from "src/utils/name";

export default function SectionMaxCategories({ styles, categories = [] }) {
  const router = useRouter();

  const gotToCategory = (category) => {
    router.push(`/categorias/${category.id}/${s3_name(category.webname)}`);
  };
  return (
    <Section
      styles={{ ...styles }}
      name={"Categorias"}
      icon={icon}
      iconStyles={{ marginLeft: "6px" }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {categories.map((category, index) => (
          <p onClick={() => gotToCategory(category)}>
            {category.webname}
            {index < categories.length - 1 ? ",\xa0" : ""}
          </p>
        ))}
      </div>
    </Section>
  );
}
