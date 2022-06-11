import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { earthquakeReducer } from "../../../earthquake/data/redux/earthquakeReducer";

const rootReducer = combineReducers({
  earthquake: earthquakeReducer,
});

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const appRepositoryImplementation = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

type AppRootState = ReturnType<typeof appRepositoryImplementation.getState>;

export { appRepositoryImplementation };
export type { AppRootState };
