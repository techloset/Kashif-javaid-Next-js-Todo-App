import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice/register";
import addReducer from "./slices/todoSlice/todoOperation";
import UserReducer from "./slices/todoSlice/readUser";
import addListReducer from "./slices/taskSlice/taskOperation";
import fetchReducer from "./slices/taskSlice/readTask";
import settingReducer from "./slices/settingsSlice/updateUserSetting";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    create: addReducer,
    userFetch: UserReducer,
    add: addListReducer,
    fetchdata: fetchReducer,
    settingPage: settingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
