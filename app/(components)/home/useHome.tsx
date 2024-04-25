import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { FetchTodo } from "@/app/store/slices/createTodoSlice/fetchTodoSlice";
import { FetchUser } from "@/app/store/slices/createTodoSlice/fetchUserSlice";
import { ALLdata, Data, Data1 } from "@/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
export default function useHome() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const fetch: ALLdata[] = useAppSelector((state) => state.fetch.data);

  const userFetch = useAppSelector((state) => state.userFetch.data);
  console.log(userFetch);

  useEffect(() => {
    const showdata = async () => {
      try {
        dispatch(FetchUser());
      } catch (error) {}
    };

    showdata();
  }, [dispatch]);

  useEffect(() => {
    const filteredUser = userFetch.filter(
      (userData: Data1) => userData.email === session?.user?.email
    );
    setUser(filteredUser as []);
  }, [userFetch]);

  const fetchData = async () => {
    try {
      dispatch(FetchTodo());
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
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
    setData,
  };
}
