/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import AwardHeader from "./award-header";
import AwardTitle from "./award-title";
import AwardDescription from "./award-description";
import BoardgamesList from "../board-games/board-games-list";
import MenuItem from "../menu/menu-item";
import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

export default function awards_list({ awards }) {
  const router = useRouter();
  const clickOnAward = (id) => {
    router.push(`awards/${id}`);
  };
  return (
    <>
      {awards.map((category) => (
        <MenuItem
          key={category.id}
          onClick={() => clickOnAward(category.id)}
          width={"90%"}
          text={category.name}
          icon={category.icon}
        ></MenuItem>
      ))}
    </>
  );
}
