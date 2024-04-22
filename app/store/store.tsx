import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice/registerSlice";
import addReducer from "./slices/createTodoSlice/todoCreate";
import dataReducer from "../store/slices/createTodoSlice/fetchTodoSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    create: addReducer,
    fetch: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
