//? ************222222*************
import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
// export const store = createStore(counterReducer);

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
export const store = createStore(rootReducer);
//? ************************************

// import { createStore, combineReducers } from "redux";
// import { counterReducer } from "./counterReducer";
//
//
///
//

// export const store = createStore(counterReducer);
