import { EditListState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: EditListState = {
  data: null,
  loading: false,
  error: null,
  id: "",
  title: "",
};
export const EditList = createAsyncThunk("editList", async () => {
  try {
  } catch (error) {}
});
export const counterSlice = createSlice({
  name: "edit",

  initialState,
  reducers: {},
});

export default counterSlice.reducer;
