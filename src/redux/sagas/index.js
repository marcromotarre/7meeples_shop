import { all } from "redux-saga/effects";
import { fetchBoardgamesSaga } from "./boardgames";
import { fetchDesignersSaga } from "./designers";
import { fetchCategoriesSaga } from "./categories";
import { fetchMechanismsSaga } from "./mechanisms";
import { fetchFamiliesSaga } from "./families";
import { fetchPublishersSaga } from "./publishers";

export default function* boardgamesSaga() {
  yield all([
    fetchBoardgamesSaga(),
    fetchDesignersSaga(),
    fetchCategoriesSaga(),
    fetchMechanismsSaga(),
    fetchFamiliesSaga(),
    fetchPublishersSaga(),
  ]);
}
