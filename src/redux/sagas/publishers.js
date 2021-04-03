import { put, call } from "redux-saga/effects";
import { fetchPublishers } from "../actions/publishers";
import { get_publishers } from "../../backend/publishers";
export function* fetchPublishersSaga() {
  try {
    const response = yield call(get_publishers);
    yield put(fetchPublishers({ publishers: response }));
  } catch (error) {
    console.log(error);
  }
}
