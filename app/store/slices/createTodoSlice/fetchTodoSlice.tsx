import { URL } from "@/app/constance/url";
import { ALLdata, FetchState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: FetchState = {
  data: [],
  loading: "idle",
  error: null,
};
export const FetchTodo = createAsyncThunk("todo", async () => {
  try {
    const res = await axios.get(`${URL}/api/createtodo`, {});
    const responseData: ALLdata[] = res.data.response;
    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(FetchTodo.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(FetchTodo.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(FetchTodo.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;