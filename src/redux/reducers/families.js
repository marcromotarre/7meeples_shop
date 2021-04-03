import { FETCH_FAMILIES } from "../actions/families";

export const initialState = {
  completed: false,
  pending: false,
  error: null,
  families: [],
};

export default function familiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FAMILIES:
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
}
