"use client";
import axios from "axios";

import { useEffect, useState } from "react";

export default function usePage() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
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
      setUser(responseData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
    showdata();
  }, [user]);

  return {
    data,
    fetchData,
    user,
  };
}
