import { put, call } from "redux-saga/effects";
import { fetchMechanisms } from "../actions/mechanisms";
import { get_mechanisms } from "../../backend/mechanisms";
export function* fetchMechanismsSaga() {
  try {
    const response = yield call(get_mechanisms);
    yield put(fetchMechanisms({ mechanisms: response }));
  } catch (error) {
    console.log(error);
  }
}
