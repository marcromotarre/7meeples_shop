import { put, call } from "redux-saga/effects";
import { fetchFamilies } from "../actions/families";
import { get_families } from "../../backend/families";
export function* fetchFamiliesSaga() {
  try {
    const response = yield call(get_families);
    yield put(fetchFamilies({ families: response }));
  } catch (error) {
    console.log(error);
  }
}
