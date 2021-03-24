import { all } from "redux-saga/effects";
import { FETCH_BOARDGAMES_REQUEST } from "../actions/boardgames";
import { fetchBoardgamesSaga } from "./boardgames";
import { fetchDesignersSaga } from "./designers";
import { fetchCategoriesSaga } from "./categories";
import { fetchMechanismsSaga } from "./mechanisms";
import { FETCH_DESIGNERS_REQUEST } from "../actions/designers";

export default function* boardgamesSaga() {
  yield all([
    fetchBoardgamesSaga(),
    fetchDesignersSaga(),
    fetchCategoriesSaga(),
    fetchMechanismsSaga(),
  ]);
}
