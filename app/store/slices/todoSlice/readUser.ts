import AxiosInstance from "@/app/constance/AxiosInstance";
import { URL } from "@/app/constance/url";
import { UserData, UserState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: {
    id: "",
    name: "",
    email: "",
    imageUrl: "",
  },
  todos: [],
  loading: "idle",
  error: null,
};
export const fetchUser = createAsyncThunk("users", async (email: string) => {
  try {
    const res = await AxiosInstance.get(
      `${URL}/api/register/?email=${email}`,
      {}
    );
    const responseData = await res.data.data;

    const user: UserData = {
      id: responseData.id,
      name: responseData.name,
      email: responseData.email,
      imageUrl: responseData.imageUrl,
    };
    const todos = responseData.todo;
    return { user, todos };
  } catch (error) {
    throw error;
  }
});

export const UserSlice = createSlice({
  name: "userFetch",

  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.user = action.payload.user;
        state.todos = action.payload.todos;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
