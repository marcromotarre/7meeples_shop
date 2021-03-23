/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { s3_name } from "src/utils/name";

export default function Juego() {
  const router = useRouter();
  const all_boardgames = useSelector(
    (state) => state.boardgamesReducer.boardgames
  );
  useEffect(() => {
    if (router.query.id && all_boardgames.length > 0) {
      const boardgame = all_boardgames.find(
        ({ id }) => id === parseInt(router.query.id)
      );
      router.push(`/juego/${router.query.id}/${s3_name(boardgame.webname)}`);
    }
  }, [router, all_boardgames]);
  return <></>;
}
