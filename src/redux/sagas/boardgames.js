import { put, call } from "redux-saga/effects";
import { fetchBoardgames } from "../actions/boardgames";
import { get_boardgames } from "../../backend/boardgames";
export function* fetchBoardgamesSaga() {
  try {
    const response = yield call(get_boardgames);
    yield put(fetchBoardgames({ boardgames: response }));
  } catch (error) {
    console.log(error);
  }
}
