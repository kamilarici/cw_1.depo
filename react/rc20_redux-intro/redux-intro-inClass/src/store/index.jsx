import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
//! store 'u olustrduk
// export const store = createStore(counterReducer)

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
// const rootReducer = combineReducers({
//   counterReducer,
//   todoReducer,
// });

export const store = createStore(rootReducer, composeEnhancers);
