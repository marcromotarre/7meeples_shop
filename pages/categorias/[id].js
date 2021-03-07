/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import categories from "../../src/components/categories/categories";
import { useRouter } from "next/router";
import AwardHeader from "src/components/awards/award-header";
import AwardDescription from "src/components/awards/award-description";
import BoardgameList from "src/components/board-games/board-games-list";
import { useSelector } from "react-redux";

export default function Boardgame() {
  const [category, setCategory] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      const category = categories.find(({ id }) => id === router.query.id);
      setCategory(category);
    }
  }, [router]);

  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const category_boardgames = category?.filter(boardgames);
  console.log("category_boardgames", category_boardgames);
  return (
    <div
      sx={{
        display: "grid",
        rowGap: "15px",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div sx={{ height: "50px" }}></div>
      <AwardHeader></AwardHeader>
      {category?.description && (
        <AwardDescription description={category.description}></AwardDescription>
      )}
      {category_boardgames && (
        <BoardgameList
          styles={{ width: "80%" }}
          boardgames={category_boardgames}
        ></BoardgameList>
      )}
    </div>
  );
}
