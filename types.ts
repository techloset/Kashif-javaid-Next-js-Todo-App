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
  todo: null;
  isLoading: false;
  error: null;
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
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
}

export interface UserState {
  data: ALLUser[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

export interface ALLUser {
  id: number;
  email: string;
}
export interface Data1 {
  email: string;
}

export interface AddListState {
  data: null;
  loading: false;
  error: null;
  title: string;
  todoId: string;
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
