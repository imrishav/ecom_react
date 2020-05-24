import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./types";
import axios from "axios";

import { fetchCollectionFailure, fetchCollectionSuccess } from "./actions";

import {
  firestore,
  covertCollectionSnapshotToMpa,
  collectionChange,
} from "../../firebase/firebase";

export function* fetchCollectionAsync() {
  try {
    const categories = yield axios.get("http://localhost:3001/categories");
    const collectionMap2 = yield call(collectionChange, categories.data.data); //just like normal function call
    console.log("new Cat", collectionMap2);

    // const collectionRef = firestore.collection("collections");
    // const snapShot = yield collectionRef.get();
    // const collectionMap = yield call(covertCollectionSnapshotToMpa, snapShot); //just like normal function call
    yield put(fetchCollectionSuccess(collectionMap2)); // put is like dispatch
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
