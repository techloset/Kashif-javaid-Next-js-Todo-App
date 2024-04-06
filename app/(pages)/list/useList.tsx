import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const useList = ({ params }: { params: { id: string } }) => {
  console.log(params);
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();
  const color = searchParams.get("color");
  const text = searchParams.get("text");
  const border = searchParams.get("border");

  const fetchData = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/list", {
        title,
        todoId: params.id,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    title,
    setTitle,
    color,
    text,
    border,
    fetchData,
  };
};

export default useList;
