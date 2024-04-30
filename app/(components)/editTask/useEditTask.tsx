"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ParamsList } from "@/types";
import { editList } from "@/app/store/slices/taskSlice/taskOperation";
const useEditTodo = ({ id }: ParamsList) => {
  const [topicTitle, setTopicTitle] = useState("");

  const dispatch = useAppDispatch();
  const edit = useAppSelector((state) => state.add.data);
  const router = useRouter();
  const handleEdit = async () => {
    try {
      dispatch(editList({ id, title: topicTitle }));
      toast.success("Successfully updated topic");
    } catch (error) {}
    router.back();
  };

  return {
    setTopicTitle,
    handleEdit,
    topicTitle,
  };
};

export default useEditTodo;
