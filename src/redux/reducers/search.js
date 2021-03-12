import { CHANGE_SEARCH_VALUE } from "../actions/search";

export const initialState = {
  searchString: "",
};

function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchString: payload.value,
      };
    default:
      return {
        ...state,
      };
  }
}

export default searchReducer;
