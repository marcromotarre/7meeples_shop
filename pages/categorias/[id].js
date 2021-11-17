/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";

export default function Categorias() {
  const router = useRouter();
  const all_categories = useSelector(
    (state) => state.categoriesReducer.categories
  );
  useEffect(() => {
    if (router.query.id && all_categories.length > 0) {
      const category = all_categories.find(
        ({ id }) => id === parseInt(router.query.id)
      );
      router.push(
        `/categorias/${router.query.id}/${s3_name(category.webname)}`
      );
    }
  }, [router, all_categories]);
  return <></>;
}
