import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { FetchList } from "@/app/store/slices/taskSlice/readTask";
import {
  addData,
  removeList,
  resetState,
} from "@/app/store/slices/taskSlice/taskOperation";
import { paramsId } from "@/types";

const useAddList = ({ params }: { params: paramsId }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();
  const color = searchParams.get("color");
  const text = searchParams.get("text");
  const border = searchParams.get("border");
  const heading = searchParams.get("title");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const handleToggleCheck = (itemId: string) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };
  const dispatch = useAppDispatch();
  const add = useAppSelector((state) => state.add.data);
  const fetchdata = useAppSelector((state) => state.fetchdata.data);
  const remove = useAppSelector((state) => state.add.data);

  const fetchList = async () => {
    try {
      const todoId = params.id;
      dispatch(FetchList({ params: { id: todoId }, todoId }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchList();
  });

  const addList = async () => {
    try {
      if (!title) {
        toast.error("Please Enter a title");
        return null;
      }
      setLoading(true);
      const todoId = params.id;
      dispatch(addData({ title, params: { id: todoId } }));
      toast.success("Successfully Task Created");

      await dispatch(resetState());
      setTitle("");

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const removeTopic = async (id: string) => {
    try {
      const confirmed = confirm("Are you sure you want to remove?");
      if (confirmed) {
        dispatch(removeList(id));
        toast.success("Successfully removed");
      } else {
        toast.error("Removal cancelled");
      }
    } catch (error) {
      toast.error("Removal failed");
    }
  };

  return {
    title,
    setTitle,
    color,
    text,
    border,
    addList,
    data,
    checkedItems,
    handleToggleCheck,
    removeTopic,
    fetchdata,
    heading,
    setData,
    loading,
  };
};

export default useAddList;
