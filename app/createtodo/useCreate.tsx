import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
const useCreate = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const addlist = async (e: FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter title");
      return;
    }

    try {
      await axios.post("api/createtodo", {
        title,
      });
      alert("Success to create");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("api/createtodo", {});
      const responseData = res.data.response;
      setData(responseData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {
    title,
    setTitle,
    fetchData,
    data,
    addlist,
  };
};

export default useCreate;
