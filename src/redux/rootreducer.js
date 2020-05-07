import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import testReducer from "./testMe/testReducer";

export default combineReducers({
  user: userReducer,
  test: testReducer,
});
