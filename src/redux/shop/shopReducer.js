import ShopActionTypes from "./types";

const INTIAL_STATE = {
  collections: null,
  newColl: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS2:
      return {
        ...state,
        isFetching: false,
        newColl: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
