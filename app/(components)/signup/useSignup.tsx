"use client";
import { FormEvent, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { SignUp } from "@/app/store/slices/authSlice/registerSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import toast from "react-hot-toast";
export default function useSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState([]);
  const [exists, setExists] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.user);
  const formHandle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!name || !email || !password || !confirmpassword) {
        toast.error("Please All fields Required");
        return;
      }
      if (!exists) {
        toast.error("User already exists");

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        router.push("/login");
        return exists;
      }

      dispatch(SignUp({ name, email, password, confirmpassword }));
      await toast.success("Successfully Register");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.push("/login");
    } catch (error) {
      toast.error("error registering");
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmpassword,
    setConfirmPassword,
    formHandle,
    user,
  };
}
