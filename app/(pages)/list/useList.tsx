import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "@/types";
import toast from "react-hot-toast";

const useList = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();
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

  const fetchData = async () => {
    try {
      if (!title) {
        return null;
      }
      toast.error("Please select a title");
      const res = await axios.post("http://localhost:3000/api/list", {
        title,
        todoId: params.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchList = async () => {
    try {
      const todoId = params.id;
      const res = await axios.get(`http://localhost:3000/api/list/${todoId}`);

      const responseData = res.data.result.filter(
        (item: Item) => item.todoId === todoId
      );
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchList();
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
  };
};

export default useList;
