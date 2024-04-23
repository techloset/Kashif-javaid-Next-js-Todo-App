import { EditListState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: EditListState = {
  data: null,
  loading: false,
  error: null,
  id: "",
  title: "",
};
export const EditList = createAsyncThunk(
  "editList",
  async ({ params }: { params: { id: string } }) => {
    try {
      const todoId = params.id;
      const res = await axios.get(`${URL}/api/list/${todoId}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
);
export const editSlice = createSlice({
  name: "editdata",

  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(EditList.pending, (state) => {
        state.loading = false;
      })
      .addCase(EditList.pending, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(EditList.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default editSlice.reducer;
