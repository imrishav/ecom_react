import ProductActionTypes from "./types";

const INITIAL_STATE = {
  product: null,
  errorMessage: undefined,
  isFetching: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case ProductActionTypes.PRODUCT_FETCH_SUCCESS:
      console.log("received", action.payload);
      return {
        ...state,
        isFetching: false,
        product: action.payload,
      };
    case ProductActionTypes.PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
