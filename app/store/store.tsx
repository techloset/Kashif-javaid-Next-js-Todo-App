import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice/registerSlice";
import addReducer from "./slices/createTodoSlice/todoCreate";
import dataReducer from "../store/slices/createTodoSlice/fetchTodoSlice";
import UserReducer from "../store/slices/createTodoSlice/fetchUserSlice";
import addListReducer from "./slices/listsSlice/listOperations";
import fetchReducer from "./slices/listsSlice/readList";
import settingReducer from "../store/slices/settingsSlice/updateUserSettingSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    create: addReducer,
    fetch: dataReducer,
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
