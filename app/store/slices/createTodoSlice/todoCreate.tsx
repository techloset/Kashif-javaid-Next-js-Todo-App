import { URL } from "@/app/constance/url";
import { CreateState } from "@/types";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const initialState: CreateState = {
  todo: null,
  isLoading: false,
  error: null,
  title: "",
  color: "",
  textColor: "",
  borderColor: "",
};
export const CreateTodo = createAsyncThunk(
  "create",
  async ({
    title,
    color,
    textColor,
    borderColor,
  }: {
    title: string;
    color: string;
    textColor: string;
    borderColor: string;
  }) => {
    try {
      await axios.post(`${URL}/api/createtodo`, {
        title,
        color,
        textColor,
        borderColor,
      });
    } catch (error) {}
  }
);

const addSlice = createSlice({
  name: "create",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(CreateTodo.pending, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(CreateTodo.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(CreateTodo.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = addSlice.actions;
export default addSlice.reducer;
