/** @jsxImportSource theme-ui */
//import BoardgameMinFixedHeight from "src/components/board-games/boardgame-min-fixed-height";
import { useRouter } from "next/router";
import React, { useState } from "react";

import play_time_icon from "src/assets/svg/sections/play-time.svg";
import age_icon from "src/assets/svg/sections/age.svg";
import designers_icon from "src/assets/svg/sections/designers.svg";
import number_of_players_icon from "src/assets/svg/sections/number-of-players.svg";
import weight_icon from "src/assets/svg/sections/weight.svg";
import { BOARDGAME_ATTRIBUTES } from "src/components/board-games/utils";
import { s3_name } from "src/utils/name";
import Image from "next/image";

export default function Slider({
  filters = false,
  title = "",
  elements = [],
  styles,
}) {
  const router = useRouter();
  const [showPlayTime, setShowPlayTime] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showNumberPlayers, setShowNumberPlayers] = useState(false);
  const [showWeight, setShowWeight] = useState(false);

  let attributes = [];

  if (showPlayTime) attributes.push(BOARDGAME_ATTRIBUTES.PLAY_TIME);
  if (showAge) attributes.push(BOARDGAME_ATTRIBUTES.AGE);
  if (showNumberPlayers)
    attributes.push(BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS);
  if (showWeight) attributes.push(BOARDGAME_ATTRIBUTES.WEIGHT);

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "start",
        alignItems: "start",
        rowGap: "10px",
        height: "fit-content",
        ...styles,
      }}
    >
      <h3
        sx={{
          paddingLeft: "30px",
        }}
      >
        {title}
      </h3>
      {filters && (
        <div
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "15px",
          }}
        >
          <Image
            onClick={() => setShowPlayTime(!showPlayTime)}
            sx={{
              opacity: showPlayTime ? "1" : "0.3",
              width: "auto",
              height: "100%",
            }}
            src={play_time_icon}
          />
          <Image
            onClick={() => setShowAge(!showAge)}
            sx={{
              opacity: showAge ? "1" : "0.3",
              width: "auto",
              height: "100%",
            }}
            src={age_icon}
          />
          <Image
            onClick={() => setShowNumberPlayers(!showNumberPlayers)}
            sx={{
              opacity: showNumberPlayers ? "1" : "0.3",
              width: "auto",
              height: "100%",
            }}
            src={number_of_players_icon}
          />
          <Image
            onClick={() => setShowWeight(!showWeight)}
            sx={{
              opacity: showWeight ? "1" : "0.3",
              width: "auto",
              height: "60%",
            }}
            src={weight_icon}
          />
        </div>
      )}
      <div
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          sx={{
            position: "relative",
            paddingLeft: "30px",
            paddingBottom: "20px",
            display: "grid",
            width: "100%",
            gridTemplateColumns: [
              `repeat(${elements.length}, 250px) 15px`,
              `repeat(${elements.length}, 30%) 15px`,
              `repeat(${elements.length}, 25%) 15px`,
              `repeat(${elements.length}, 20%) 15px`,
            ],
            alignItems: "center",
            justifyItems: "center",
            columnGap: "25px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {/*elements.map((boardgame) => (
            <>
              {boardgame && (
                <BoardgameMinFixedHeight
                  onClick={(id, name) =>
                    router.push(`/juego/${id}/${s3_name(name)}`)
                  }
                  styles={{ width: "100%", height: "350px" }}
                  key={boardgame?.id}
                  boardgame={boardgame}
                  attributes={attributes}
                />
              )}
            </>
          ))*/}
          <div sx={{ height: "100%", width: "10px" }}></div>
        </div>
      </div>
    </div>
  );
}
