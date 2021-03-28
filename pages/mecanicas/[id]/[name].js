/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgame, get_multiple_boardgames } from "src/backend/boardgames";
import BoardgameMax from "src/components/board-games/boardgame-max";
import MiaRecommends from "src/components/mia/mia-recommends";
import { useRouter } from "next/router";
import { get_multiple_mechanisms } from "src/backend/mechanisms";
import { get_multiple_designers } from "src/backend/designers";
import { get_multiple_categories } from "src/backend/categories";
import Loading from "src/components/common/loading/loading";
import { useSelector, useDispatch } from "react-redux";
import MechanismView from "src/views/mechanism.view";
export default function Mechanisms() {
  const router = useRouter();

  const mechanisms = useSelector((state) => state.mechanismsReducer.mechanisms);
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const [mechanism, setMechanism] = useState();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setMechanism(undefined);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    setMechanism(undefined);
    if (router.query.id) {
      const _mechanism = mechanisms?.find(
        ({ id }) => id === parseInt(router?.query?.id)
      );
      if (_mechanism) {
        setMechanism(_mechanism);
      }
    }
  }, [router, mechanisms]);

  boardgames;

  return <MechanismView mechanism={mechanism} />;
}
