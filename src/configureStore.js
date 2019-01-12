import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import appReducer from "./reducers";

let middleware = [thunk];

if (__DEV__) {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export default function configureStore(NavigationReduxMiddleware) {
  const store = createStore(
    appReducer,
    compose(applyMiddleware(...middleware, NavigationReduxMiddleware))
  );

  return store;
}
