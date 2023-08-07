import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
};

const getNews = createAsyncThunk(
  "getNewsFunc", //? action type name

  async () => {
    const API_KEY = "47d350b7a633401694e0fa5b4ddcfd46";
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
    const { data } = await axios(url);
    console.log(data);
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
