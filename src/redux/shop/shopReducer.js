import SHOP_DATA from "./shop-data";

const INTIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  console.log(INTIAL_STATE);
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
