/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import categories from "../../src/components/categories/data/categories";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Category from "../../src/components/categories/category";

export default function Boardgame() {
  const [category, setCategory] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      const category = categories.find(({ id }) => id === router.query.id);
      setCategory(category);
    }
  }, [router]);

  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const category_boardgames = category?.filter(boardgames);
  return (
    <div>
      <div sx={{ height: "50px" }}></div>
      <Category {...category} boardgames={category_boardgames}></Category>
      <div sx={{ height: "50px" }}></div>
    </div>
  );
}
