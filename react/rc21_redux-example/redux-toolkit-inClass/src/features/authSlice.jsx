import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "",
}

//? Slice ile bir global state'in hem action type'lari , hem action creator fonksiyonlarini hem de reducer'i tek bir hamlede olusturabiliriz.

const authSlice = createSlice({
  name: "auth", //? action type'ı olusturmak icin
  initialState, //? state'in bslangic degeri icin
  reducers: {
    //? action creator fonks. ve reducer icin
    setUser: (state, action) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = ""
    },
  },
})

//? olusan action fonksiyonları sliceAdi.actions 'dan destructure edilerek export edilir.
export const { setUser, clearUser } = authSlice.actions

//? yazilan slice'in reducer'i sliceAdi.reducer seklinde export edilmelidir.
export default authSlice.reducer
