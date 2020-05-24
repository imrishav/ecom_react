import { all, call } from "redux-saga/effects";

import { shopSaga } from "./shop/sagas";
import { userSagas } from "./user/sagas";
import { cartSagas } from "./cart/sagas";
import { directorySagas } from "./directory/sagas";
import { productSagas } from "./product/sagas";

export default function* rootSaga() {
  yield all([
    call(directorySagas),
    call(shopSaga),
    call(userSagas),
    call(cartSagas),
    call(productSagas),
  ]);
}
