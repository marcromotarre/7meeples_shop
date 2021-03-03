import { FETCH_DESIGNERS } from "../actions/designers";

export const initialState = {
  completed: false,
  pending: false,
  error: null,
  designers: [],
};

export default function designersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DESIGNERS:
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
}
