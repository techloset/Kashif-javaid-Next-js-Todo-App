import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { AddData } from "@/app/store/slices/addListSlice/addDataListSlice";
import { FetchList } from "@/app/store/slices/addListSlice/fetchDataList";
import { RemoveList } from "@/app/store/slices/addListSlice/removeTodoSlice";
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
  const fetchdata = useAppSelector((state) => state.fetchdata.data);
  const remove = useAppSelector((state) => state.removeList.data);

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

  const removeTopic = async (id: string) => {
    try {
      const confirmed = confirm("Are you sure you want to remove?");
      if (confirmed) {
        dispatch(RemoveList(id));
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
    fetchData,
    data,
    checkedItems,
    handleToggleCheck,
    removeTopic,
    isLoading,
    fetchdata,
  };
};

export default useAddList;
