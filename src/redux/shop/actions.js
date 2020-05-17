import ShopActionTypes from "./types";
import {
  firestore,
  covertCollectionSnapshotToMpa,
} from "../../firebase/firebase";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
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
