import { configureStore } from "@reduxjs/toolkit";
import AdminAuthSlice from "../features/Auth/AdminAuthSlice";
import AuthSlice from "../features/Auth/AuthSlice";





export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    adminAuth: AdminAuthSlice,
  },
});