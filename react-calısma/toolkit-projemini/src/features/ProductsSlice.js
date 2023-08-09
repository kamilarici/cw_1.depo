import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
