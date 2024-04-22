import { URL } from "@/app/constance/url";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { FetchTodo } from "@/app/store/slices/createTodoSlice/fetchTodoSlice";
import { ALLdata, Data } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";

export default function useHome() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const fetch: ALLdata[] = useAppSelector((state) => state.fetch.data);

  const fetchData = async () => {
    try {
      dispatch(FetchTodo());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showdata = async () => {
    try {
      const res = await axios.get(`${URL}/api/register`, {});

      const responseData = await res.data.data;

      const user = responseData.filter(
        (userData: Data) => userData.email === session?.user?.email
      );

      setUser(user);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
    showdata();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [fetchData]);

  return {
    data,
    fetchData,
    user,
    isLoading,
    fetch,
  };
}
