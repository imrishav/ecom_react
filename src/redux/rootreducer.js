import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import testReducer from "./testMe/testReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directorReducer";
import shopReducer from "./shop/shopReducer";
import productReducer from "./product/productReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart", "directory"],
};

const rootReducer = combineReducers({
  user: userReducer,
  test: testReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
