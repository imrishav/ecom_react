import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import testReducer from "./testMe/testReducer";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  test: testReducer,
  cart: cartReducer,
});
