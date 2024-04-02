import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { OnSelectColor } from "@/types";
import { useRouter } from "next/navigation";

const useCreate = (onSelectColor?: OnSelectColor) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [data, setData] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const router = useRouter();
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    if (onSelectColor) {
      onSelectColor(color);
      setColor(color);
    }
  };

  const addlist = async (e: FormEvent) => {
    e.preventDefault();
    if (!title && !color) {
      alert("Please enter title and selected color");
      return null;
    }

    try {
      await axios.post("api/createtodo", {
        title,
        color: selectedColor,
      });
      alert("Success to create");
      setTitle("");
      setColor("");
      router.push("/");
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("api/createtodo", {});
      const responseData = res.data.response;
      setData(responseData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const customColors = [
    "bg-custom-todo1",
    "bg-custom-todo2",
    "bg-custom-todo3",
    "bg-custom-todo4",
    "bg-custom-todo5",
    "bg-custom-todo6",
    "bg-custom-todo7",
    "bg-custom-todo8",
    "bg-custom-todo9",
  ];
  const customTexts = [
    "Vintage Garden",
    "Cosmic Symphony",
    "Rustic Charm",
    "Sunset Serenade",
    "Industrial Chic",
    "Blackout Neutrals",
    "Vibrant Spectrum",
    "Coastal Sunrise",
    "Oceanic Serenity",
  ];
  const customBorders = [
    "border-custom-border-todo1",
    "border-custom-border-todo2",
    "border-custom-border-todo3",
    "border-custom-border-todo4",
    "border-custom-border-todo5",
    "border-custom-border-todo6",
    "border-custom-border-todo7",
    "border-custom-border-todo8",
    "border-custom-border-todo9",
  ];
  const customTextColors = [
    "text-custom-text-todo1",
    "text-custom-text-todo2",
    "text-custom-text-todo3",
    "text-custom-text-todo4",
    "text-custom-text-todo5",
    "text-custom-text-todo6",
    "text-custom-text-todo7",
    "text-custom-text-todo8",
    "text-custom-text-todo9",
  ];

  return {
    title,
    setTitle,
    fetchData,
    data,
    addlist,
    handleColorSelect,
    onSelectColor,
    selectedColor,
    customTextColors,
    customColors,
    customBorders,
    customTexts,
    color,
    setColor,
  };
};

export default useCreate;
