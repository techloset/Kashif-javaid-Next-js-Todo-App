"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { URL } from "@/app/constance/url";
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
