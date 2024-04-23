import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "@/types";
import toast from "react-hot-toast";
import { URL } from "@/app/constance/url";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { AddData } from "@/app/store/slices/addListSlice/addDataSlice";

const useAddList = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const color = searchParams.get("color");
  const text = searchParams.get("text");
  const border = searchParams.get("border");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleToggleCheck = (itemId: string) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };
  const dispatch = useAppDispatch();
  const add = useAppSelector((state) => state.add.data);

  const fetchData = async () => {
    try {
      if (!title) {
        return null;
      }

      const todoId = params.id;
      dispatch(AddData({ title, params: { id: todoId } }));
      toast.success("Successfully List Created");
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, [AddData]);

  const fetchList = async () => {
    try {
      const todoId = params.id;
      const res = await axios.get(`${URL}/api/list/${todoId}`);

      const responseData = res.data.result.filter(
        (item: Item) => item.todoId === todoId
      );
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeTopic = async (id: string) => {
    try {
      const confirmed = confirm("Are you sure you want to remove?");
      if (confirmed) {
        await axios.delete(`${URL}/api/list/?id=${id}`);
        toast.success("Successfully removed");
        fetchData();
      } else {
        toast.error("Removal cancelled");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [fetchList]);

  return {
    title,
    setTitle,
    color,
    text,
    border,
    fetchData,
    data,
    checkedItems,
    handleToggleCheck,
    removeTopic,
    isLoading,
  };
};

export default useAddList;
