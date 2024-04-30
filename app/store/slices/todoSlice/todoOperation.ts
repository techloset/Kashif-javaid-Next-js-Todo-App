import AxiosInstance from "@/app/constance/AxiosInstance";
import { URL } from "@/app/constance/url";
import { ALLdata, CreateState } from "@/types";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: CreateState = {
  data: [],
  isLoading: false,
  error: null,
  title: "",
  color: "",
  textColor: "",
  borderColor: "",
  email: "",
};
export const CreateTodo = createAsyncThunk(
  "create",
  async ({
    title,
    color,
    textColor,
    borderColor,
    email,
  }: {
    title: string;
    color: string;
    textColor: string;
    borderColor: string;
    email: string;
  }) => {
    try {
      await AxiosInstance.post(`${URL}/api/createtodo`, {
        title,
        color,
        textColor,
        borderColor,
        email,
      });
    } catch (error) {}
  }
);

export const fetchTodo = createAsyncThunk("todo", async () => {
  try {
    const res = await AxiosInstance.get(`${URL}/api/createtodo`, {});
    const responseData: ALLdata[] = res.data.response;

    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

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
      .addCase(CreateTodo.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = addSlice.actions;
export default addSlice.reducer;
