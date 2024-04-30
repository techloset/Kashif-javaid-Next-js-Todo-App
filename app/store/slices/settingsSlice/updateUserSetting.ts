import AxiosInstance from "@/app/constance/AxiosInstance";
import { URL } from "@/app/constance/url";
import { SettingState, UserUpdate } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: SettingState = {
  data: [],
  loading: false,
  error: null,
  name: "",
  email: "",
  image: "",
  imageUrl: "",
  password: "",
};

export const updateSetting = createAsyncThunk(
  "updateSetting",
  async ({
    params,
    image,
    name,
    email,
    imageUrl,
    password,
  }: {
    params: { id: string };
    image: File | null;
    name: string;
    email: string;
    imageUrl: string;
    password: string;
  }) => {
    try {
      let updatedImageUrl = "";
      if (image) {
        const cloud = "dk48g8htz";
        const UPLOAD_PRESET = "todo-app";
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", UPLOAD_PRESET);

        const uploadRes = await AxiosInstance.post(
          `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        updatedImageUrl = uploadRes.data.secure_url;
      }

      const updateData: UserUpdate = {
        imageUrl: updatedImageUrl || imageUrl,
        password,
      };
      if (name) {
        updateData.name = name;
      }
      if (email) {
        updateData.email = email;
      }
      if (updatedImageUrl) {
        updateData.imageUrl = updatedImageUrl || imageUrl;
      }

      const updateRes = await AxiosInstance.put(
        `${URL}/api/register/${params.id}`,
        updateData
      );

      return updateRes.data;
    } catch (error) {
      throw error;
    }
  }
);

export const settingSlice = createSlice({
  name: "settingPage",
  initialState,
  reducers: {
    resetState: (state) => {
      state.imageUrl = "";
      state.name = "";
      state.email = "";
      state.image = "";
      state.password = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSetting.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateSetting.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateSetting.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetState } = settingSlice.actions;
export default settingSlice.reducer;
