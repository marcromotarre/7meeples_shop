import { SET_DEVICE } from "../actions/device";
import { MOBILE } from "../../../utils/media-querys";

export const initialState = {
  device: MOBILE,
};

export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEVICE:
      return { ...state, device: action.payload };
    default:
      return {
        ...state,
      };
  }
}
