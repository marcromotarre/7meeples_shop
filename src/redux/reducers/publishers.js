import { FETCH_PUBLISHERS } from "../actions/publishers";

export const initialState = {
  completed: false,
  pending: false,
  error: null,
  publishers: [],
};

export default function publishersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PUBLISHERS:
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
}
