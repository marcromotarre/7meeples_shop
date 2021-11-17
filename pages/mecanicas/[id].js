/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";

export default function Mecanicas() {
  const router = useRouter();
  const all_mechanisms = useSelector(
    (state) => state.mechanismsReducer.mechanisms
  );
  useEffect(() => {
    if (router.query.id && all_mechanisms.length > 0) {
      const mechanism = all_mechanisms.find(
        ({ id }) => id === parseInt(router.query.id)
      );
      debugger;
      router.push(
        `/mecanicas/${router.query.id}/${s3_name(mechanism.webname)}`
      );
    }
  }, [router, all_mechanisms]);
  return <></>;
}
