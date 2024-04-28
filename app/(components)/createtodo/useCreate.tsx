import { FormEvent, useEffect, useState } from "react";
import { OnSelectColor } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { CreateTodo } from "@/app/store/slices/createTodoSlice/todoCreate";
import { FetchTodo } from "@/app/store/slices/createTodoSlice/fetchTodoSlice";
const useCreate = (onSelectColor?: OnSelectColor) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [data, setData] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const create = useAppSelector((state) => state.create.todo);
  const handleColorSelect = (
    color: string,
    customBorders: string,
    customTextColors: string
  ) => {
    setSelectedColor(color);
    if (onSelectColor) {
      onSelectColor(color);
      onSelectColor(customBorders);
      onSelectColor(customTextColors);
    }

    setColor(color);
    setTextColor(customTextColors);
    setBorderColor(customBorders);
  };

  const addlist = async (e: FormEvent) => {
    e.preventDefault();

    if (!title) {
      toast.error("Please select a title");
      return null;
    }

    if (!selectedColor) {
      toast.error("Please select a color");
      return null;
    }

    try {
      dispatch(
        CreateTodo({ title, color: selectedColor, textColor, borderColor })
      );
      toast.success("successfully created");
      router.push("/");
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      dispatch(FetchTodo);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
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

  // [{ id: "rustic-charm", border: "rusti" }, {}];

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
    textColor,
    setBorderColor,
    borderColor,
  };
};

export default useCreate;
