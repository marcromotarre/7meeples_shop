/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from "react";
import BoardgameScore from "./boardgame-average";
import BoardgameName from "./boardgame-name";
import { get_min_section } from "./section/utils";
import { IMAGES_REPOSITORY } from "src/constants";
import { DEFAULT_BOARDGAME_ATTRIBUTES } from "./utils";
import { s3_name } from "src/utils/name";
import Image from "next/image";

export default function BoardgameMin({
  attributes = DEFAULT_BOARDGAME_ATTRIBUTES,
  moreAttributes = [],
  boardgame,
  onClick,
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
            padding: "20px 0px 0px 0px",
            width: "80%",
            height: "300px",
            position: "relative",
          }}
        >
          <Image
            alt=""
            objectFit="contain"
            layout={"fill"}
            src={
              image ? `${IMAGES_REPOSITORY}boardgames/${image}` : imageDefault
            }
          />
        </div>
      </div>
      <BoardgameScore average={average} numVotes={numVotes}></BoardgameScore>
      <BoardgameName name={name} year={year} />
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
