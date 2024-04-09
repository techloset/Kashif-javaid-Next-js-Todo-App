"use client";
import axios from "axios";

import { useEffect, useState } from "react";

export default function usePage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/createtodo", {});
      const responseData = res.data.response;
      setData(responseData);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, [setData]);

  return {
    data,
    fetchData,
  };
}
