import { get_playtime_score } from "./score/play_time_score";
export const recomendations = ({ boardgames, boardgame }) => {
  const scores = boardgames
    .map((boardgame_to_compare) => {
      return {
        boardgame: boardgame_to_compare,
        score: get_score(boardgame_to_compare, boardgame),
      };
    })
    .sort((a, b) => b.score - a.score);
  console.log("scores", scores);
  return scores.map((score) => score.boardgame);
};

const get_score = (boardgame1, boardgame2) => {
  //categories
  const categories_score = get_categories_score(
    boardgame1.categories,
    boardgame2.categories
  );
  const mechanisms_score = get_mechanisms_score(
    boardgame1.mechechanisms,
    boardgame2.mechechanisms
  );

  //mechanisms

  //play_time

  const play_time_score = get_playtime_score(
    { min: boardgame1.playTimeMin, max: boardgame1.playTimeMax },
    { min: boardgame2.playTimeMin, max: boardgame2.playTimeMax }
  );

  console.log(
    { min: boardgame1.playTimeMin, max: boardgame1.playTimeMax },
    { min: boardgame2.playTimeMin, max: boardgame2.playTimeMax },
    play_time_score
  );

  const designers_score = get_designers_score(
    boardgame1.designers,
    boardgame2.designers
  );

  //numberOfPlayers

  //numberOfPlayersBest

  //numberOfPlayersNotRecommended

  return (
    categories_score + mechanisms_score + designers_score + play_time_score
  );
};

const get_categories_score = (categories1, categories2) => {
  const max_number_of_categories = Math.max(
    categories1.length,
    categories2.length
  );
  const categories_equal = categories1.filter((category) =>
    categories2.includes(category)
  );
  return categories_equal.length / max_number_of_categories;
};

const get_mechanisms_score = (mechanisms1, mechanisms2) => {
  const max_number_of_mechanisms = Math.max(
    mechanisms1.length,
    mechanisms2.length
  );
  const mechanisms_equal = mechanisms1.filter((mechanism) =>
    mechanisms2.includes(mechanism)
  );
  return mechanisms_equal.length / max_number_of_mechanisms;
};

const get_designers_score = (designers1, designers2) => {
  const max_number_of_designers = Math.max(
    designers1.length,
    designers2.length
  );
  const designers_equal = designers1.filter((designer) =>
    designers2.includes(designer)
  );
  return designers_equal.length / max_number_of_designers;
};
