"use client";
import { useState } from "react";
import axios from "axios";
export default function useCreate() {
  const [title, setTitle] = useState("");
  const formHandler = async () => {
    try {
      const res = await axios.post("api/createtodo", {
        title,
      });
      console.log(res.data);

      console.log("created");
    } catch (error) {
      console.log("error creating");
    }
  };

  {
  }

  return {
    title,
    setTitle,
    formHandler,
  };
}
