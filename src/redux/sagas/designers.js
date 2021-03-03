import { put, call } from "redux-saga/effects";
import { fetchDesigners } from "../actions/designers";
import { get_designers } from "../../backend/designers";
export function* fetchDesignersSaga() {
  try {
    const response = yield call(get_designers);
    yield put(fetchDesigners({ designers: response }));
  } catch (error) {
    console.log(error);
  }
}
