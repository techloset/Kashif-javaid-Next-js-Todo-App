import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice/registerSlice";
import addReducer from "../store/slices/createTodo/todoCreate";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    create: addReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
