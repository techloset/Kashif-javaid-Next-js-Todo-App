import { URL } from "@/app/constance/url";
import { ALLUser, UserState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: UserState = {
  data: [],
  loading: "idle",
  error: null,
};
export const FetchUser = createAsyncThunk("users", async () => {
  try {
    const res = await axios.get(`${URL}/api/register`, {});
    const responseData: ALLUser[] = await res.data.data;
    return responseData;
  } catch (error) {
    throw error;
  }
});

export const UserSlice = createSlice({
  name: "userFetch",

  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(FetchUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(FetchUser.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(FetchUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
