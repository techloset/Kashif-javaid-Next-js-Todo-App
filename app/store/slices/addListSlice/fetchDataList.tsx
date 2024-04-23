import { URL } from "@/app/constance/url";
import { Data, FetchDataState, Item } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: FetchDataState = {
  data: [],
  loading: false,
  error: null,
  title: "",
};
export const FetchList = createAsyncThunk(
  "editList",
  async ({ params, todoId }: { params: { id: string }; todoId: string }) => {
    try {
      const res = await axios.get(`${URL}/api/list/${todoId}`);
      const responseData = res.data.result.filter(
        (item: Item) => item.todoId === todoId
      );

      return responseData;
    } catch (error) {}
  }
);
export const fetchSlice = createSlice({
  name: "fetchdata",

  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchList.pending, (state) => {
        state.loading = false;
      })
      .addCase(FetchList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchList.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default fetchSlice.reducer;
