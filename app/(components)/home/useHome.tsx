import { fetchUser } from "@/app/store/slices/todoSlice/readUser";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ALLdata, user } from "@/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { fetchTodo } from "@/app/store/slices/todoSlice/todoOperation";
export default function useHome() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState<user>();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const fetch: ALLdata[] = useAppSelector((state) => state.create.data);
  const userFetch = useAppSelector((state) => state.userFetch.user);

  const todoFetch = useAppSelector((state) => state.userFetch.todos);

  const email = session?.user?.email || "";
  useEffect(() => {
    dispatch(fetchUser(email));
  }, [dispatch]);

  useEffect(() => {
    todoFetch;
  }, [todoFetch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    todoFetch;
    return () => clearTimeout(timer);
  }, [fetchUser, fetchTodo]);

  return {
    data,
    userFetch,
    user,
    isLoading,
    fetch,
    setData,
    todoFetch,
  };
}
