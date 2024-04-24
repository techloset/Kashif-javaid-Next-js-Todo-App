import { URL } from "@/app/constance/url";
import { Edit, EditState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: EditState = {
  data: [],
  loading: false,
  error: null,
};

export const editList = createAsyncThunk(
  "edit",
  async ({ id, title }: { id: string; title: string }) => {
    const res: Edit[] = await axios.put(`${URL}/api/list/${id}`, {
      title: title,
    });

    return res;
  }
);
export const editSlice = createSlice({
  name: "editLists",

  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(editList.pending, (state) => {
        state.loading = false;
      })
      .addCase(editList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(editList.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default editSlice.reducer;
