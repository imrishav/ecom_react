import ProductActionTypes from "./types";

export const productFetchStart = (productId) => ({
  type: ProductActionTypes.PRODUCT_FETCH_START,
  payload: productId,
});

export const productFetchSuccess = (data) => ({
  type: ProductActionTypes.PRODUCT_FETCH_SUCCESS,
  payload: data,
});

export const productFetchFailure = (error) => ({
  type: ProductActionTypes.PRODUCT_FETCH_FAILURE,
  payload: error,
});
