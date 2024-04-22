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
  todo: null;
  isLoading: false;
  error: null;
  data: string;
  setData: string;
}
