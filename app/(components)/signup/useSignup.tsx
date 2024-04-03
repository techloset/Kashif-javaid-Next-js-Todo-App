"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function useSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const formHandle = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmpassword) {
      alert("Please fill all required fields");
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
        alert("User already exists");
        router.push("/login");
        return existingUser;
      }

      await axios.post("api/register", {
        name,
        email,
        password,
      });
      await alert("Registration successful!");
      router.push("/login");
    } catch (error) {
      console.log("Error: ", error);
      alert("Registration failed!");
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
  };
}
