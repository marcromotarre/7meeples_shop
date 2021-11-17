/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import CategoryView from "src/views/category.view";
import ReactGA from "react-ga";
export default function Categoria() {
  const router = useRouter();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [category, setCategory] = useState();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setCategory(undefined);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    setCategory(undefined);
    if (router.query.id) {
      const _category = categories?.find(
        ({ id }) => id === parseInt(router?.query?.id)
      );
      if (_category) {
        setCategory(_category);
        ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
        ReactGA.pageview(router.asPath);
      }
    }
  }, [router, categories]);

  return <CategoryView category={category} />;
}
