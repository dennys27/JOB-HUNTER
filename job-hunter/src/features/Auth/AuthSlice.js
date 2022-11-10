import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './AuthService'

let initialState = {
    user: "",
    token:"",
    loading:false
}

// const loginUser = createAsyncThunk("user", async (body) => {
//     let res =
    
// })

//register
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      console.log(error, "llllllllllllllllllllllllllllllllllllllll");

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


//login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});



const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage
        }
    },
    extraReducers: {
       
    }
})

export default authSlice.reducer;