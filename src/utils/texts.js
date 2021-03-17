import { levenshtein } from "./levenstein";
import { delete_special_characters } from "./name";

export const getText = (text, vars = {}) => {
  return Object.keys(vars).reduce((acc, varKey) => {
    return acc.replace(`{{${varKey}}}`, vars[varKey]);
  }, text);
};

export const get_search_points = (name, search_name) => {
  const searchSplitName = delete_special_characters(search_name).split(" ");
  let score = 0;
  const splitedName = delete_special_characters(name).split(" ");

  if (splitedName[0].startsWith(searchSplitName[0])) {
    score += 100;
  }

  score += splitedName
    .map((word) => {
      return searchSplitName
        .map((searchWord) => {
          return word.startsWith(searchWord) ? 15 : 0;
        })
        .reduce((curr, acc) => curr + acc, 0);
    })
    .reduce((curr, acc) => curr + acc, 0);
  score += splitedName
    .map((boardgameWord) => {
      return searchSplitName
        .map((searchWord) => {
          return boardgameWord.includes(searchWord) ? 5 : 0;
        })
        .reduce((curr, acc) => curr + acc, 0);
    })
    .reduce((curr, acc) => curr + acc, 0);

  score += splitedName
    .map((boardgameWord) => {
      return searchSplitName
        .map((searchWord) => {
          const levensteinDistance = levenshtein(boardgameWord, searchWord);
          if (levensteinDistance === 0) {
            return 15;
          } else if (levensteinDistance === 1) {
            return 10;
          } else if (levensteinDistance === 2) {
            return 3;
          } else if (levensteinDistance === 3) {
            return 1;
          }
          return 0;
        })
        .reduce((curr, acc) => curr + acc, 0);
    })
    .reduce((curr, acc) => curr + acc, 0);

  return score;
};
