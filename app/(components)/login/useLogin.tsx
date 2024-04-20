"use client";
import { FormEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { URL } from "@/app/constance/url";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const router = useRouter();
  const handler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      toast.success("User Login successfully");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const showdata = async () => {
    try {
      const res = await axios.get(`${URL}/api/register`, {});
      const responseData = await res.data.data;
      setUser(responseData);
    } catch (error) {}
  };

  useEffect(() => {
    showdata();
  }, [setUser]);
  return {
    email,
    setEmail,
    password,
    setPassword,
    handler,
  };
}
