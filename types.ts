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
}

export interface Data {
  email: string;
}
export type OnSelectColor = (color: string) => void;

export interface Item {
  item: Item;
  todoId: string;
}

// type APP = {
//   TODO_LIST: LIST[]
//   USER: {}
// }

// type LIST = {
//   id: string
//   uid: string
//   TITLE: string
//   THEME: {
//     PRIMARY_COLOR: string
//     SECONDARY_COLOR: string
//     ACCENT_COLOR: string
//   }
//   TASKS: TASK[]
// }

// type TASK = {
//   id: string
//   listId: string
//   title: string
//   isCompleted: boolean
// }
