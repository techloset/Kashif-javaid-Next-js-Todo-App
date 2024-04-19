"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useId = ({ id, title }: { id: string; title: string }) => {
  const [topicTitle, setTopicTitle] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/createtodo/${id}`
        );
        setTopicTitle(res.data.title);
      } catch (error) {
        console.error("Error fetching topic:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/list/${id}`, {
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

export default useId;
