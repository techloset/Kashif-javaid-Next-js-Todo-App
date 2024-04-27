import { URL } from "@/app/constance/url";
import { AuthState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};
export const SignUp = createAsyncThunk(
  "register",
  async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const res = await axios.post(`${URL}/api/userexist`, {
        email,
      });
      if (res.status !== 200) {
        throw new Error("Error creating");
      }

      await axios.post(`${URL}/api/register`, {
        name,
        email,
        password,
      });
      toast.success("User Login successfully");
    } catch (error) {
      console.log("error: ", error);
      toast.error("error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(SignUp.pending, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(SignUp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(SignUp.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
