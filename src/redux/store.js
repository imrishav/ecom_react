import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";

import rootReducer from "./rootreducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
