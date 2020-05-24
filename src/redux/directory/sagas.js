import { takeLatest, put, all, call } from "redux-saga/effects";

import CategoriesTypes from "./types";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./actions";
import Axios from "axios";

export function* fetchCat() {
  console.log("hit...???>>>>>><<<><>><>");
  try {
    const { data } = yield Axios.get("http://localhost:3001/categories");
    yield put(fetchCategoriesSuccess(data.data));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onCategoriesFetchStart() {
  yield takeLatest(CategoriesTypes.FETCH_CATEGORIES_START, fetchCat);
}

export function* directorySagas() {
  yield all([call(onCategoriesFetchStart)]);
}
