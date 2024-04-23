import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice/registerSlice";
import addReducer from "./slices/createTodoSlice/todoCreate";
import dataReducer from "../store/slices/createTodoSlice/fetchTodoSlice";
import UserReducer from "../store/slices/createTodoSlice/fetchUserSlice";
import addListReducer from "../store/slices/addListSlice/addDataSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    create: addReducer,
    fetch: dataReducer,
    userFetch: UserReducer,
    add: addListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
