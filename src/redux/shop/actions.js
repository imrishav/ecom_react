import ShopActionTypes from "./types";
import {
  firestore,
  covertCollectionSnapshotToMpa,
  collectionChange,
} from "../../firebase/firebase";

import axios from "axios";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionSuccess2 = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS2,
  payload: collectionMap,
});

export const fetchCollectionFailure = (err) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: err,
});

export const fetchCollectionStartAysnc = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snap) => {
        const collection = covertCollectionSnapshotToMpa(snap);
        dispatch(fetchCollectionSuccess(collection));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err.message)));
  };
};
export const fetchCollectionStartAysnc2 = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());
    axios
      .get("http://localhost:3001/shop")
      .then((ress) => {
        const collection = collectionChange(ress.data.data);
        console.log("new Collecton", collection);

        dispatch(fetchCollectionSuccess2(collection));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err.message)));
  };
};
