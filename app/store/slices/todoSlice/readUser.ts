import AxiosInstance from "@/app/constance/AxiosInstance";
import { URL } from "@/app/constance/url";
import { ALLUser, UserState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: UserState = {
  data: [],
  loading: "idle",
  error: null,
};
export const fetchUser = createAsyncThunk("users", async () => {
  try {
    const res = await AxiosInstance.get(`${URL}/api/register`, {});
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
      .addCase(fetchUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
