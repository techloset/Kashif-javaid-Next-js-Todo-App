"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handler,
  };
}
