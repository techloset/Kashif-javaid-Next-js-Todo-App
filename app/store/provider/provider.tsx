"use client";
import { Provider } from "react-redux";
import { store } from "../store";
import { ProviderTypes } from "@/types";

export const Providers = ({ children }: ProviderTypes) => {
  return <Provider store={store}>{children}</Provider>;
};
