import { put, call } from "redux-saga/effects";
import { fetchCategories } from "../actions/categories";
import { get_categories } from "../../backend/categories";
export function* fetchCategoriesSaga() {
  try {
    const response = yield call(get_categories);
    yield put(fetchCategories({ categories: response }));
  } catch (error) {
    console.log(error);
  }
}
