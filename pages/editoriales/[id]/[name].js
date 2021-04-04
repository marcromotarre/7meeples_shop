/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import PublisherView from "src/views/publisher.view";
export default function Categoria() {
  const router = useRouter();
  const publishers = useSelector((state) => state.publishersReducer.publishers);
  const [publisher, setPublisher] = useState();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setPublisher(undefined);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    setPublisher(undefined);
    if (router.query.id) {
      const _publisher = publishers?.find(
        ({ id }) => id === parseInt(router?.query?.id)
      );
      if (_publisher) {
        setPublisher(_publisher);
      }
    }
  }, [router, publishers]);

  return <PublisherView publisher={publisher} />;
}
