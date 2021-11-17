/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
