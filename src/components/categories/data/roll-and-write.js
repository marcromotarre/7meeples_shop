import icon from "src/assets/svg/categories/roll-and-write-icon.svg";

const description = [];

const filter_boardgames = (boardgames) => {
  return boardgames
    .filter((boardgame) => boardgame.numberOfPlayersBest.includes(2))
    .sort((boardgame1, boardgame2) => {
      return boardgame1.numVotes / 1000 + boardgame1.average >
        boardgame2.numVotes / 1000 + boardgame2.average
        ? -1
        : 1;
    });
};

const category = {
  id: "roll-and-write",
  name: "Roll & Write",
  icon: icon,
  filter: (boardgames) => filter_boardgames(boardgames),
  description: description,
};

export default category;
