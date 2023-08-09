import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/ProductsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
