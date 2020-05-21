import CategoriesActionTypes from "./types";
import axios from "axios";

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (data) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

export const fetchCategoriesFailure = (err) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: err,
});

export const fetchCategoriesAsync = () => {
  return (dispatch) => {
    console.log("hitt");
    axios
      .get("http://localhost:3001/shop")
      .then((res) => dispatch(fetchCategoriesSuccess(res.data)))
      .catch((err) => dispatch(fetchCategoriesFailure(err)));
  };
};
