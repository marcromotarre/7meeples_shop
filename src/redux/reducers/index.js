import { combineReducers } from "redux";
import boardgamesReducer from "./boardgames";
import categoriesReducer from "./categories";
import designersReducer from "./designers";
import mechanismsReducer from "./mechanisms";
import menuReducer from "./menu";
import searchReducer from "./search";
import deviceReducer from "./device";

export default combineReducers({
  boardgamesReducer,
  categoriesReducer,
  designersReducer,
  mechanismsReducer,
  menuReducer,
  searchReducer,
  deviceReducer,
});
