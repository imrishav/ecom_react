import { all, call } from "redux-saga/effects";

import { shopSaga } from "./shop/sagas";
import { userSagas } from "./user/sagas";
import { cartSagas } from "./cart/sagas";

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSagas), call(cartSagas)]);
}
