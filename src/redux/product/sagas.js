import { takeLatest, put, call, all } from "redux-saga/effects";
import ProductActionTypes from "./types";
import axios from "axios";

import { productFetchFailure, productFetchSuccess } from "./actions";

export function* productFetchingStarted({ payload }) {
  console.log("payload", payload);
  try {
    const {
      data: { item },
    } = yield axios.get(`http://localhost:3001/items/${payload}`);
    yield put(productFetchSuccess(item));
  } catch (error) {
    yield put(productFetchFailure(error));
  }
}

export function* onProductFetch() {
  yield takeLatest(
    ProductActionTypes.PRODUCT_FETCH_START,
    productFetchingStarted
  );
}

export function* productSagas() {
  yield all([call(onProductFetch)]);
}
