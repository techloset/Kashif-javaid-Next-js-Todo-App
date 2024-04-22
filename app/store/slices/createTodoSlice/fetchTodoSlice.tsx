import { URL } from "@/app/constance/url";
import { FetchState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: FetchState = {
  todo: null,
  isLoading: false,
  error: null,
  data: "",
  setData: "",
};
export const FetchTodo = createAsyncThunk("fetchtodos", async ({}: {}) => {
  try {
    const res = await axios.get(`${URL}/api/createtodo`, {});
    const responseData = res.data.response;
    return responseData;
  } catch (error) {}
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(FetchTodo.pending, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(FetchTodo.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(FetchTodo.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = fetchSlice.actions;
export default fetchSlice.reducer;
