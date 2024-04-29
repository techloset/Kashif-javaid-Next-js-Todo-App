import { useState } from "react";
import AxiosInstance from "@/app/constance/AxiosInstance";
export default function useChangePassword() {
  const [email, setEmail] = useState("");
  const handlerForget = async () => {
    try {
      const res = await AxiosInstance.post(
        "http://localhost:3000/api/forgetpassword",
        {
          email,
        }
      );
      if (res.status === 400) {
        alert("Email already exists");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    email,
    setEmail,
    handlerForget,
  };
}
