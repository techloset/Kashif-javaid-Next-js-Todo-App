"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function usePage(id: string) {
  const [topic, setTopic] = useState<any>(null);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await axios.get(`api/createtodo/${id}`);
        if (res.status === 200) {
          setTopic(res.data.topic);
          setEdit(res.data.topic.title); // Assuming the title is present in the topic data
        } else {
          throw new Error("Failed to fetch todo");
        }
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTopic();
  }, [id]);

  const handleEdit = () => {
    setEdit("");
  };

  return {
    topic,
    edit,
    setEdit,
    handleEdit,
  };
}
