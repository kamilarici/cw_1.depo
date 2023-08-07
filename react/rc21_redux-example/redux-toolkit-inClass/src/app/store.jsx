import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import newsReducer from "../features/newsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    api: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? eger gelistirme asamasi prodcution ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
})
