"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bademail, setBademail] = useState(false);
  const [badpassword, setBadpassword] = useState(false);

  const router = useRouter();
  const validate = () => {
    let isValid = true;
    if (email === "") {
      setBademail(true);
      toast.error("Email is required");
      isValid = false;
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setBademail(true);
      toast.error("Email is invalid");
      isValid = false;
    } else {
      setBademail(false);
    }

    if (password === "") {
      setBadpassword(true);
      toast.error("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setBadpassword(true);
      toast.error("Password must be at least 8 characters");
      isValid = false;
    } else {
      setBadpassword(false);
    }

    return isValid;
  };

  const handler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (validate()) {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        router.push("/");
      }
    } catch (error) {}
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handler,
    bademail,
    badpassword,
  };
}
