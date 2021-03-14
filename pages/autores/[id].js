/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";

export default function Autor() {
  const router = useRouter();
  const all_designers = useSelector(
    (state) => state.designersReducer.designers
  );
  useEffect(() => {
    if (router.query.id && all_designers.length > 0) {
      const designer = all_designers.find(
        ({ id }) => id === parseInt(router.query.id)
      );
      router.push(`/autores/${router.query.id}/${s3_name(designer.name)}`);
    }
  }, [router, all_designers]);
  return <></>;
}
