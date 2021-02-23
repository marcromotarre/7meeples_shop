/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

import AwardsListView, { ID as AWARDS_LIST_VIEW } from "./awards-list-view";
import AwardView, { ID as AWARD_VIEW } from "./award-view";

import Flow from "../../common/flow/flow";
import { useState, useEffect } from "react";
import { get_awards, get_award } from "src/backend/awards";
import { get_multiple_boardgames } from "src/backend/boardgames";

export const ORDER = [AWARDS_LIST_VIEW, AWARD_VIEW];

export default function AwardsFlow() {
  const [data, setData] = useState({ categories: [], boardgames: [] });
  const [goToStep, setGoToStep] = useState(ORDER[0]);

  useEffect(() => {
    loadAwardsCategories();
  }, []);

  const loadAwardsCategories = async () => {
    const awards = await get_awards();
    setData({ ...data, categories: awards });
  };

  const selectAward = async (id) => {
    const category_index = data.categories.findIndex(
      (category) => category.id === id
    );

    const boardgames = await get_multiple_boardgames({
      ids: data.categories[category_index].boardgames,
    });

    setData({
      ...data,
      selected: id,
      boardgames: [...data.boardgames, ...boardgames],
    });
  };
  console.log(data);
  const go = (id) => {
    console.log(id);
    setGoToStep(AWARD_VIEW);
    selectAward(id);
  };
  return (
    <Flow goToStep={goToStep} steps={ORDER}>
      <AwardsListView data={data} setData={setData} setGoToStep={go} />
      <AwardView data={data} setData={setData} setGoToStep={go} />
    </Flow>
  );
}
