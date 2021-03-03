import { FETCH_MECHANISMS } from "../actions/mechanisms";

export const initialState = {
  completed: false,
  pending: false,
  error: null,
  mechanisms: [],
};

export default function mechanismsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MECHANISMS:
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
}
