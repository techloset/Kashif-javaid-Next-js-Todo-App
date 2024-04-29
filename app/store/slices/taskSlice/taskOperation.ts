import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "@/app/constance/url";
import { AddListState, Edit, paramsType } from "@/types";
import AxiosInstance from "@/app/constance/AxiosInstance";

const initialState: AddListState = {
  data: null,
  loading: false,
  error: null,
  title: "",
  todoId: "",
  id: "",
};

export const addData = createAsyncThunk(
  "list",
  async ({ params, title }: { params: { id: string }; title: string }) => {
    const res = await AxiosInstance.post(`${URL}/api/list`, {
      title,
      todoId: params.id,
    });

    return res.data;
  }
);

export const editList = createAsyncThunk(
  "edit",
  async ({ id, title }: paramsType) => {
    const res: Edit[] = await AxiosInstance.put(`${URL}/api/list/${id}`, {
      title: title,
    });

    return res;
  }
);

export const removeList = createAsyncThunk("remove", async (id: string) => {
  try {
    await AxiosInstance.delete(`${URL}/api/list/?id=${id}`);
  } catch (error) {}
});

export const addListSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    resetState: (state) => {
      state.title = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state) => {
        state.loading = false;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(addData.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(editList.pending, (state) => {
        state.loading = false;
      })
      .addCase(editList.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(editList.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeList.pending, (state) => {
        state.loading = false;
      })
      .addCase(removeList.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeList.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export const { resetState } = addListSlice.actions;
export default addListSlice.reducer;
