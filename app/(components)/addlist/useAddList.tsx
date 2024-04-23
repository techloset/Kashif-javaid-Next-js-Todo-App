import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { URL } from "@/app/constance/url";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { AddData } from "@/app/store/slices/addListSlice/addDataListSlice";
import { FetchList } from "@/app/store/slices/addListSlice/fetchDataList";
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

  useEffect(() => {
    const fetchList = async () => {
      try {
        const todoId = params.id;
        dispatch(FetchList({ params: { id: todoId }, todoId }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchList();
  }, [params.id, dispatch]);

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

  useEffect(() => {
    if (add) {
      fetchData();
    }
  }, [add, fetchData, dispatch, params.id]);

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
