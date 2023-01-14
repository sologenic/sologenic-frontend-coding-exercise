import {
  configureStore,
  applyMiddleware,
  compose,
  createStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mainSaga from "./sagas";
import createRootReducer from "./reducers/index";

const rootReducer = createRootReducer();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default createStore(rootReducer, enhancer);

sagaMiddleware.run(mainSaga);
