import { URL } from "@/app/constance/url";
import { RemoveListState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState: RemoveListState = {
  data: null,
  loading: false,
  error: null,
};

export const RemoveList = createAsyncThunk("remove", async (id: string) => {
  try {
    await axios.delete(`${URL}/api/list/?id=${id}`);
  } catch (error) {}
});
export const removeSlice = createSlice({
  name: "removeList",

  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RemoveList.pending, (state) => {
        state.loading = false;
      })
      .addCase(RemoveList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(RemoveList.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default removeSlice.reducer;
