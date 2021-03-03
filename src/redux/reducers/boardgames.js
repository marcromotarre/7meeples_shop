import { FETCH_BOARDGAMES } from "../actions/boardgames";

export const initialState = {
  completed: false,
  pending: false,
  error: null,
  boardgames: [],
};

export default function boardgamesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDGAMES:
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
}
