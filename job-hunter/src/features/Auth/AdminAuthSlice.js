import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminAuthService from "./AdminAuth";


let initialState = {
  user: "",
  token: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};




//login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await adminAuthService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await adminAuthService.logout();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
    // .addCase(logout.fulfilled, (state) => {
    //   state.user = null;
    // });
  },
});

export default authSlice.reducer;
