import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "@/app/constance/url";
import { AddListState } from "@/types";

const initialState: AddListState = {
  data: null,
  loading: false,
  error: null,
  title: "",
  todoId: "",
};

export const AddData = createAsyncThunk(
  "list",
  async ({ params, title }: { params: { id: string }; title: string }) => {
    const res = await axios.post(`${URL}/api/list`, {
      title,
      todoId: params.id,
    });

    return res.data;
  }
);

export const addListSlice = createSlice({
  name: "add",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddData.pending, (state) => {
        state.loading = false;
      })
      .addCase(AddData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(AddData.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default addListSlice.reducer;
