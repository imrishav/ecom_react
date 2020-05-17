import { takeEvery, call, put } from "redux-saga/effects";

import ShopActionTypes from "./types";

import { fetchCollectionFailure, fetchCollectionSuccess } from "./actions";

import {
  firestore,
  covertCollectionSnapshotToMpa,
} from "../../firebase/firebase";

export function* fetchCollectionAsync() {
  yield console.log("Fired...");
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(covertCollectionSnapshotToMpa, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}
