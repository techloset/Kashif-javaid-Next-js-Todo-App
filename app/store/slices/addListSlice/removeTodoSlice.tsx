import { RemoveListState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: RemoveListState = {
  data: null,
  loading: false,
  error: null,
};

export const RemoveList = createAsyncThunk("remove", async () => {
  try {
  } catch (error) {}
});
export const counterSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {},
});

export default counterSlice.reducer;
