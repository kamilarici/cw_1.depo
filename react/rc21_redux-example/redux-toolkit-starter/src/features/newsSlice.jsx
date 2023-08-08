import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  news: [],
  loading:true,
  error:false,
};

export const getNews = createAsyncThunk("getNewsFunc", async () => {
  const API_KEY = "47d350b7a633401694e0fa5b4ddcfd46";
  //   const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const data = awaitaxios(url);
  console.log(data);
  return data
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
    extraReducers: (builder) => {
        builder
          .addCase(
            (getNews.pending,
            (state) => {
              state.loading = true
            })
          )
          .addCase(getNews.fulfilled, (state, action) => {
            state.news = action.payload
            state.loading = false
          })
          .addCase(getNews.rejected, (state) => {
            state.error = true
            state.loading = false
          })
      },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
