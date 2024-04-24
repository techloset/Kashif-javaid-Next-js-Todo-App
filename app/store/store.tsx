import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice/registerSlice";
import addReducer from "./slices/createTodoSlice/todoCreate";
import dataReducer from "../store/slices/createTodoSlice/fetchTodoSlice";
import UserReducer from "../store/slices/createTodoSlice/fetchUserSlice";
import addListReducer from "./slices/addListSlice/addDataListSlice";
import fetchReducer from "./slices/addListSlice/fetchDataList";
import removeReducer from "../store/slices/addListSlice/removeTodoSlice";
import editReducer from "../store/slices/addListSlice/editListSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    create: addReducer,
    fetch: dataReducer,
    userFetch: UserReducer,
    add: addListReducer,
    fetchdata: fetchReducer,
    removeList: removeReducer,
    editLists: editReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
