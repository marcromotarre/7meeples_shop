/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import BoardgameScore from "./boardgame-average";
import BoardgameName from "./boardgame-name-small";
import { get_min_section } from "./section/utils";
import { IMAGES_REPOSITORY } from "src/constants";
import { DEFAULT_BOARDGAME_ATTRIBUTES } from "./utils";
import { s3_name } from "src/utils/name";
import Image from "../common/images/image";

export default function BoardgameMinFixedHeight({
  attributes = DEFAULT_BOARDGAME_ATTRIBUTES,
  moreAttributes = [],
  boardgame,
  onClick = () => {},
  styles,
}) {
  const {
    id,
    webname: name,
    average,
    numVotes,
    year,
    imageDefault,
    image,
  } = boardgame;

  const [showMore, setShowMore] = useState(false);

  const clickOnMore = () => {};

  const onClickBoardgame = () => {
    onClick(id, s3_name(name));
  };
  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  const showAttributes = showMore ? moreAttributes : attributes;

  return (
    <div
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
        maxWidth: "400px",
        ...styles,
      }}
      onClick={onClickBoardgame}
    >
      <div
        sx={{
          width: "100%",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            width: "100%",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            styles={{
              maxHeight: "80%",
              maxWidth: "80%",
            }}
            src={
              image ? `${IMAGES_REPOSITORY}boardgames/${image}` : imageDefault
            }
          />
        </div>
      </div>
      <div
        sx={{ display: "grid", gridTemplateRows: "auto 50px", width: "90%" }}
      >
        <BoardgameScore average={average} numVotes={numVotes}></BoardgameScore>
        <BoardgameName name={name} year={year} />
      </div>

      <div sx={{ width: "100%" }}>
        <div sx={{ width: "100%" }}>
          {showAttributes.map((attribute) => (
            <>
              <div sx={separator}></div>
              {get_min_section({
                attribute,
                values: { ...boardgame, onClickMore: () => setShowMore(true) },
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
