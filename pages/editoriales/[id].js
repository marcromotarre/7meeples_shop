/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";

export default function Editoriales() {
  const router = useRouter();
  const all_publishers = useSelector(
    (state) => state.publishersReducer.publishers
  );
  console.log("all_publishers", all_publishers);
  useEffect(() => {
    if (router.query.id && all_publishers.length > 0) {
      const publisher = all_publishers.find(
        ({ id }) => id === parseInt(router.query.id)
      );
      router.push(`/editoriales/${router.query.id}/${s3_name(publisher.name)}`);
    }
  }, [router, all_publishers]);
  return <></>;
}
