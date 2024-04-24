import { EditState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: EditState = {
  data: null,
  loading: false,
  error: null,
};

export const editSlice = createSlice({
  name: "editLists",

  initialState,
  reducers: {},
});

export default editSlice.reducer;
