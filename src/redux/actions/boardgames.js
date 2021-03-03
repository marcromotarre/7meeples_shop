export const FETCH_BOARDGAMES = "FETCH_BOARDGAMES";
export const FETCH_BOARDGAMES_REQUEST = "FETCH_BOARDGAMES_REQUEST";
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_REQUESTED_BOARDGAMES = "FETCH_REQUESTED_BOARDGAMES";

export const fetchBoardgames = (boardgames) => ({
  type: FETCH_BOARDGAMES,
  payload: boardgames,
});
export const fetchBoardgamesRequest = () => ({
  type: FETCH_BOARDGAMES_REQUEST,
});
