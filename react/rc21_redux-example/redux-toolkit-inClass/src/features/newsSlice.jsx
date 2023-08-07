import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  news: [],
  loading: false,
  error: false,
}

export const getNews = createAsyncThunk(
  "getNewsFunc", //? action type name

  async () => {
    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

    try {
      const { data } = await axios(url)
      console.log(data)
      return data.articles
    } catch (error) {
      console.log(error)
    }
  }
)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = []
    },
  },
  //? createAyncThunk metedo bir middleware olarak API gibi dis kaynakli isteklerin redux ortaminda olsuturulmasini saglar. Ancak API^deki durumlara gore state'lerin guncellenmesini saglamaz. Bunun icin slice icersiindeki extraReducer kismi kullanilir.

  //? API isteklerinde 3 farkli alt durum meydana gelir. Bunlar baslama (pending), basarili bitme (fullfilled) ve basariz bitme (rejected) dir.

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
})

export const { clearNews } = newsSlice.actions

export default newsSlice.reducer
