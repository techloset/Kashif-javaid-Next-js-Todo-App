import React, { ChangeEvent } from "react";
export type InputType = {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  type?: string;
};

export interface TodoItem {
  id: string;
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
}
export interface Item {
  id: string;
  imageUrl: string;
}

export interface Data {
  email: string;
}
export interface List {
  id: string;
  title: string;
}
export type OnSelectColor = (color: string) => void;

export interface Item {
  item: Item;
  todoId: string;
}

export interface AuthState {
  user: null;
  isLoading: false;
  error: null;
}
export interface CreateState {
  data: ALLdata[];
  isLoading: false;
  error: null;
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
  email: string;
}

export interface FetchState {
  data: ALLdata[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

export interface ALLdata {
  todo: null;
  id: number;
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
  userEmail: string;
}
export interface UserData {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
}
export interface TodoData {
  id: string;
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
  userEmail: string;
}
export interface UserState {
  user: UserData;
  todos: TodoData[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

export interface ALLUser {
  id: string;
  email: string;
  imageUrl: string;
  todo: TodoItem[];
}

export interface Data1 {
  email: string;
}
export interface Data2 {
  userEmail: string;
}

export interface Data3 {
  id: string;
  email: string;
}

export interface AddListState {
  data: null;
  loading: false;
  error: null;
  title: string;
  todoId: string;
  id: string;
}

export interface FetchDataState {
  data: Data[];
  loading: false;
  error: null;
  title: string;
}
export interface Data {
  id: string;
  title: string;
}

export interface RemoveListState {
  data: null;
  loading: false;
  error: null;
}

export interface EditState {
  data: Edit[];
  loading: false;
  error: null;
}

export interface Edit {
  id: string;
  title: string;
}

export interface Settings {
  id: string;
  email: string;
  imageUrl: string;
}

export interface Setting {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
}
export interface UserUpdate {
  name?: string;
  email?: string;
  imageUrl?: string;
  password?: string;
}

export interface SettingState {
  data: SettingData[];
  loading: false;
  error: null;
  name: string;
  email: string;
  image: string;
  imageUrl: string;
  password: string;
}
export interface SettingData {
  name: string;
  email: string;
  image: string;
  imageUrl: string;
  password: string;
}

export interface UsersTypes {
  req: any;
  id: string;
  email: string;
  password: string;
  imageUrl: string;
}

export interface ButtonTypes {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
}

export interface ParamsList {
  title: string;
  id: string;
  todoId: string;
}

export interface paramsType {
  id: string;
  title: string;
}

export interface paramsId {
  id: string;
}

export interface user {
  id: string;
}

export interface ProviderTypes {
  children?: React.ReactNode;
}
export interface create {
  email: string;
}
