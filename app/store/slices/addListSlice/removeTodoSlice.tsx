import { RemoveListState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: RemoveListState = {
  data: null,
  loading: false,
  error: null,
};

export const RemoveList = createAsyncThunk("remove", async (id: string) => {
  try {
    const confirmed = confirm("Are you sure you want to remove?");
    if (confirmed) {
      await axios.delete(`${URL}/api/list/?id=${id}`);
    }
  } catch (error) {
    console.log(error);
  }
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
