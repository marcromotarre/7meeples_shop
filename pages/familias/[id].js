/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";

export default function Families() {
  const router = useRouter();
  const all_families = useSelector((state) => state.familiesReducer.families);
  console.log("all_families", all_families);
  useEffect(() => {
    if (router.query.id && all_families.length > 0) {
      debugger;
      const family = all_families.find(
        ({ id }) => id === parseInt(router.query.id)
      );
      router.push(`/familias/${router.query.id}/${s3_name(family.webname)}`);
    }
  }, [router, all_families]);
  return <></>;
}
