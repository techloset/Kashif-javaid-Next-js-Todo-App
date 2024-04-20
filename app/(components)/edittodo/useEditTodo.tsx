"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { URL } from "@/app/constance/url";

const useEditTodo = ({ id, title }: { id: string; title: string }) => {
  const [topicTitle, setTopicTitle] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URL}/api/createtodo/${id}`);
        setTopicTitle(res.data.title);
      } catch (error) {
        console.error("Error fetching topic:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = async () => {
    try {
      const res = await axios.put(`${URL}/api/list/${id}`, {
        title: topicTitle,
      });
      toast.success("Successfully updated topic");
    } catch (error) {
      console.error("Error editing todo:", error);
    }
    router.back();
  };

  return {
    setTopicTitle,
    handleEdit,
  };
};

export default useEditTodo;
