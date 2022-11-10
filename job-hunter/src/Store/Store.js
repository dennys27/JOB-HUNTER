import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/Auth/AuthSlice";




export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});