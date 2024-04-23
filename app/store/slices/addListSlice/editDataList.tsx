import { createSlice } from "@reduxjs/toolkit";

const initialState: EditState = {};

export const counterSlice = createSlice({
  name: "edit",

  initialState,
  reducers: {},
});

export default counterSlice.reducer;
