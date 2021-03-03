import { OPEN_MENU, CLOSE_MENU } from "../actions/menu";

export const initialState = {
  open: false,
};

function menuReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MENU:
      return {
        ...state,
        open: true,
      };

    case CLOSE_MENU:
      return {
        ...state,
        open: false,
      };

    default:
      return {
        ...state,
      };
  }
}

export default menuReducer;
