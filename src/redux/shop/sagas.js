import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./types";

import { fetchCollectionFailure, fetchCollectionSuccess } from "./actions";

import {
  firestore,
  covertCollectionSnapshotToMpa,
} from "../../firebase/firebase";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(covertCollectionSnapshotToMpa, snapShot); //just like normal function call
    yield put(fetchCollectionSuccess(collectionMap)); // put is like dispatch
  } catch (error) {
    put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
