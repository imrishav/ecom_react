import SHOP_DATA from "./shop-data";

import ShopActionTypes from "./types";

const INTIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;