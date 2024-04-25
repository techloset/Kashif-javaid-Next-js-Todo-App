import { SettingState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SettingState = {
  data: [],
  loading: false,
  error: null,
  name: "",
  email: "",
  imageUrl: "",
};

export const counterSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {},
});

export default counterSlice.reducer;
