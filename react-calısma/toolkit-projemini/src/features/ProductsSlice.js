import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
// export const getProducts = () => {
//   return async function getProductThunk(dispatch){

//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
// dispatch(fetchProducts(result))
//   }
// };

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //     fetchProducts:(state,action)=>{
    // state.products=action.payload
    //     }
  },
  extraReducers:
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
