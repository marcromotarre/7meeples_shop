import { FETCH_CATEGORIES } from "../actions/categories";

export const initialState = {
  completed: false,
  pending: false,
  error: null,
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
}
