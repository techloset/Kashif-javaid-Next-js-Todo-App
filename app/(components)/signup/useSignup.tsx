"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function useSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const formHandle = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmpassword) {
      toast.error("All fields are required");
      return;
    }
    try {
      const res = await axios.post("api/userexist", {
        email,
      });
      if (res.status !== 200) {
        throw new Error("Server error");
      }

      const { existingUser } = res.data;

      if (existingUser) {
        toast.error("User already exists");
        router.push("/login");
        return existingUser;
      }

      await axios.post("api/register", {
        name,
        email,
        password,
      });

      console.log(setUserId);

      await toast.success(`Successfully registered`);
      router.push("/login");
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Could not register");
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
    userId,
    setUserId,
  };
}
