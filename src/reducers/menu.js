function menuReducer(
  state = {
    open: false,
  },
  { type, payload }
) {
  switch (type) {
    case "OPEN_MENU":
      return {
        ...state,
        open: true,
      };

    case "CLOSE_MENU":
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
