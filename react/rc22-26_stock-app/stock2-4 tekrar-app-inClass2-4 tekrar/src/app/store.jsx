import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //? default localstorage .. tırnak sonuna /session derseniz session storage saklar

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: authReducer,
    stock: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
