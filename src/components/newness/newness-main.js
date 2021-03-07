/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import SectionTitle from "../sections/section-title";
import newness_icon from "../../assets/svg/newness/icon.svg";
import { useEffect, useState } from "react";
import { get_newness } from "src/backend/newness";
import { useSelector } from "react-redux";
import Loading from "../common/loading/loading";
import BoardgameList from "../board-games/board-games-list";

export default function NewnessMain() {
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);

  const [newness, setNewness] = useState([]);
  const [newnessCompleteInfo, setNewnessCompleteInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadNewness();
  }, []);
  const loadNewness = async () => {
    const newness = await get_newness();
    const orderedNewness = newness.sort((a, b) => {
      if (a.year === b.year) {
        return a.month > b.month ? -1 : 1;
      }
      return a.year > b.year ? -1 : 1;
    });
    console.log("orderedNewness", orderedNewness);
    setNewness(orderedNewness);
  };

  useEffect(() => {
    get_newness_boardgames_info();
  }, [boardgames, newness]);

  const get_newness_boardgames_info = () => {
    if (boardgames.length > 0 && newness.length > 0) {
      const completeNewnessData = newness
        .map(({ month, year, boardgames: boardagmes_ids }) => {
          return {
            year,
            month,
            boardgames: boardagmes_ids.map((id) =>
              boardgames.find((boardgame) => boardgame.id === id)
            ),
          };
        })
        .reduce((acc, current) => [...acc, ...current.boardgames], []);
      setLoading(false);
      console.log(completeNewnessData);
      setNewnessCompleteInfo(completeNewnessData);
    }
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      <SectionTitle
        title={"Las últimas novedades"}
        icon={newness_icon}
      ></SectionTitle>
      {loading && <Loading></Loading>}
      {!loading && (
        <BoardgameList
          styles={{ width: "80%" }}
          boardgames={newnessCompleteInfo}
        ></BoardgameList>
      )}
      <div sx={{ height: "50px" }}></div>
    </div>
  );
}
