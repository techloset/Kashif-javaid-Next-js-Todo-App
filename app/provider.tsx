"use client";
import { ProviderTypes } from "@/types";
import { SessionProvider } from "next-auth/react";
import React from "react";

export const Provider = ({ children }: ProviderTypes) => {
  return <SessionProvider>{children}</SessionProvider>;
};
