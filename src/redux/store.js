import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./rootreducer";

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default { store, persistor };
