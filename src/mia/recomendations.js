import { get_playtime_score } from "./score/play_time_score";
import { isRegExp } from "util";
export const recomendations = ({ boardgames, boardgame }) => {
  const scores = boardgames
    .map((boardgame_to_compare) => {
      return {
        boardgame: boardgame_to_compare,
        scores: get_scores(boardgame_to_compare, boardgame),
        score: get_scores(boardgame_to_compare, boardgame).score,
      };
    })
    .sort((a, b) => b.scores.score - a.scores.score);
  console.log("scores", scores);
  return scores.map((score) => score.boardgame);
};

const get_scores = (boardgame1, boardgame2) => {
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

  const designers_score = get_designers_score(
    boardgame1.designers,
    boardgame2.designers
  );

  const weight_score = get_weight_score(boardgame1.weight, boardgame2.weight);
  const number_of_players_score = get_number_of_players_score(
    {
      numberOfPlayers: boardgame1.numberOfPlayers,
      numberOfPlayersBest: boardgame1.numberOfPlayersBest,
      numberOfPlayersNotRecommended: boardgame1.numberOfPlayersNotRecommended,
    },
    {
      numberOfPlayers: boardgame2.numberOfPlayers,
      numberOfPlayersBest: boardgame2.numberOfPlayersBest,
      numberOfPlayersNotRecommended: boardgame2.numberOfPlayersNotRecommended,
    }
  ); //numberOfPlayers

  //numberOfPlayersBest

  //numberOfPlayersNotRecommended
  return {
    score:
      categories_score +
      mechanisms_score +
      designers_score * 0.5 +
      play_time_score +
      weight_score * 2 +
      number_of_players_score * 2,
    mechanisms_score,
    categories_score,
    designers_score,
    play_time_score,
    weight_score,
    number_of_players_score,
  };
};

const get_number_of_players_score = (
  number_of_players_1,
  number_of_players_2
) => {
  const num_players_count =
    (number_of_players_1.numberOfPlayers.length +
      number_of_players_2.numberOfPlayers.length) /
    2;
  const num_players_best_count =
    (number_of_players_1.numberOfPlayersBest.length +
      number_of_players_2.numberOfPlayersBest.length) /
    2;
  const num_players_not_recommended_count =
    (number_of_players_1.numberOfPlayersNotRecommended.length +
      number_of_players_2.numberOfPlayersNotRecommended.length) /
    2;

  const number_of_players_best_equal = number_of_players_1.numberOfPlayersBest.filter(
    (number_of_players_best) =>
      number_of_players_2.numberOfPlayersBest.includes(number_of_players_best)
  ).length;

  const number_of_players_best_score =
    number_of_players_best_equal / num_players_best_count;

  const number_of_players_equal = number_of_players_1.numberOfPlayers.filter(
    (number_of_players) =>
      number_of_players_2.numberOfPlayers.includes(number_of_players)
  ).length;

  const number_of_players_core = number_of_players_equal / num_players_count;

  const number_of_players_best_not_recommened_equal = [
    ...number_of_players_1.numberOfPlayersBest.filter(
      (number_of_players_best) =>
        number_of_players_2.numberOfPlayersNotRecommended.includes(
          number_of_players_best
        )
    ),
    ...number_of_players_2.numberOfPlayersBest.filter(
      (number_of_players_best) =>
        number_of_players_1.numberOfPlayersNotRecommended.includes(
          number_of_players_best
        )
    ),
  ].length;

  const number_of_players_best_not_recommented_score =
    number_of_players_best_not_recommened_equal /
    num_players_not_recommended_count;

  const number_of_players_not_recommened_equal = [
    ...number_of_players_1.numberOfPlayers.filter((number_of_players) =>
      number_of_players_2.numberOfPlayersNotRecommended.includes(
        number_of_players
      )
    ),
    ...number_of_players_2.numberOfPlayers.filter((number_of_players) =>
      number_of_players_1.numberOfPlayersNotRecommended.includes(
        number_of_players
      )
    ),
  ].length;

  const number_of_players_not_recommented_score =
    number_of_players_not_recommened_equal / num_players_not_recommended_count;

  const def_number_of_players_best_score = isNaN(number_of_players_best_score)
    ? 0
    : number_of_players_best_score;
  const def_number_of_players_core = isNaN(number_of_players_core)
    ? 0
    : number_of_players_core;

  const def_number_of_players_not_recommented_score = isNaN(
    number_of_players_not_recommented_score
  )
    ? 0
    : number_of_players_not_recommented_score;

  const def_number_of_players_best_not_recommented_score = isNaN(
    number_of_players_best_not_recommented_score
  )
    ? 0
    : number_of_players_best_not_recommented_score;

  return (
    (def_number_of_players_best_score * 2 +
      def_number_of_players_core -
      def_number_of_players_not_recommented_score -
      def_number_of_players_best_not_recommented_score * 2) /
    3
  );
};

const get_weight_score = (weight_1, weight_2) => {
  const weight_difference = Math.abs(weight_1 - weight_2);
  return weight_difference_function(weight_difference);
};

const weight_difference_function = (difference) => {
  const points = [
    { x: 0, y: 1 },
    { x: 1, y: 0.75 },
    { x: 2, y: 0.2 },
    { x: 3, y: 0.05 },
    { x: 4, y: 0 },
  ];

  let m;
  if (difference < 1) {
    m = (points[1].y - points[0].y) / (points[1].x + points[0].x);
    return m * difference - m * points[0].x + points[0].y;
  } else if (difference < 2) {
    m = (points[2].y - points[1].y) / (points[2].x + points[1].x);
    return m * difference - m * points[1].x + points[1].y;
  } else if (difference < 3) {
    m = (points[3].y - points[2].y) / (points[3].x + points[2].x);
    return m * difference - m * points[2].x + points[2].y;
  } else {
    m = (points[4].y - points[3].y) / (points[4].x + points[3].x);
    return m * difference - m * points[3].x + points[3].y;
  }
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
