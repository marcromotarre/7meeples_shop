/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import FamilyView from "src/views/family.view";
import ReactGA from "react-ga";
import { s3_name } from "src/utils/name";

export default function Categoria() {
  const router = useRouter();
  const families = useSelector((state) => state.familiesReducer.families);
  const [family, setFamily] = useState();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setFamily(undefined);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    setFamily(undefined);
    if (router.query.id) {
      const _family = families?.find(
        ({ id }) => id === parseInt(router?.query?.id)
      );
      if (_family) {
        setFamily(_family);
        ReactGA.initialize("UA-196446154-1");
        ReactGA.pageview(`/familia/${_family.id}/${s3_name(_family.webname)}`);
      }
    }
  }, [router, families]);

  return <FamilyView family={family} />;
}
