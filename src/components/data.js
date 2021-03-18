/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBoardgamesRequest } from "src/redux/actions/boardgames";
import { fetchCategoriesRequest } from "src/redux/actions/categories";
import { fetchDesignersRequest } from "src/redux/actions/designers";
import { fetchMechanismsRequest } from "src/redux/actions/mechanisms";
import { setDevice } from "src/redux/actions/device";
import { getDevice } from "../../utils/media-querys";

//this component will load all data related to the app
export default function Data() {
  const dispatch = useDispatch();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const designers = useSelector((state) => state.designersReducer.categories);
  const mechanisms = useSelector((state) => state.mechanismsReducer.categories);

  const device = getDevice();
  dispatch(setDevice(device));

  useEffect(() => {
    if (boardgames?.length === 0) dispatch(fetchBoardgamesRequest());
    if (categories?.length === 0) dispatch(fetchCategoriesRequest());
    if (designers?.length === 0) dispatch(fetchDesignersRequest());
    if (mechanisms?.length === 0) dispatch(fetchMechanismsRequest());
  }, []);

  return <></>;
}
