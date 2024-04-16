"use client";
import { Data } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";

export default function usePage() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const { data: session } = useSession();
  console.log(session);
  console.log(session?.user?.email);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/createtodo", {});
      const responseData = res.data.response;
      setData(responseData);
    } catch (error) {}
  };

  const showdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/register", {});

      const responseData = await res.data.data;
      console.log(responseData);

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

  return {
    data,
    fetchData,
    user,
  };
}
