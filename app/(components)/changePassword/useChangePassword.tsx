import { useState } from "react";

import axios from "axios";
export default function useChangePassword() {
  const [email, setEmail] = useState("");
  const handlerForget = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/forgetpassword", {
        email,
      });
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
