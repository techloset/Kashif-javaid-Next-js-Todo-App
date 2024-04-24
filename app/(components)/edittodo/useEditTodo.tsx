"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { editList } from "@/app/store/slices/addListSlice/editListSlice";
const useEditTodo = ({ id, title }: { id: string; title: string }) => {
  const [topicTitle, setTopicTitle] = useState("");

  const dispatch = useAppDispatch();
  const edit = useAppSelector((state) => state.editLists.data);
  const router = useRouter();
  const handleEdit = async () => {
    try {
      dispatch(editList({ id, title: topicTitle }));
      await toast.success("Successfully updated topic");
    } catch (error) {}
    router.back();
  };

  return {
    setTopicTitle,
    handleEdit,
  };
};

export default useEditTodo;
