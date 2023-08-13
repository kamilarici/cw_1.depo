import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    brands: [],
    products: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    //? 6 farklı fonksiyon yazmak yerine tek fonksiyon ile hallettik(stock.firms.product vs yerine ) use stockcall da parametre geçtik buraya

    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
      // ? x[y] demek x in içindeki y yi bana getir
    },

    // getFirmsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload;
    // },
    // getBrandsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.brands = payload;
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.brands = payload;
    // },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getStockSuccess,

  // getFirmsSuccess,
  // getBrandsSuccess,
  // getSalesSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
