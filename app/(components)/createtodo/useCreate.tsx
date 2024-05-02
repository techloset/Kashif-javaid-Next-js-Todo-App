import { FormEvent, useEffect, useState } from "react";
import { OnSelectColor } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  CreateTodo,
  fetchTodo,
} from "@/app/store/slices/todoSlice/todoOperation";
import { useSession } from "next-auth/react";

const useCreate = (onSelectColor?: OnSelectColor) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [data1, setUser] = useState("");
  const [data, setData] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: session } = useSession();

  const create = useAppSelector((state) => state.create.data);

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
    setLoading(true);
    if (!title) {
      toast.error("Please enter a title");
      setLoading(false);
      return null;
    }

    if (!selectedColor) {
      toast.error("Please select a color");
      setLoading(false);
      return null;
    }

    try {
      const email = session?.user?.email || "";

      dispatch(
        CreateTodo({
          title,
          color: selectedColor,
          textColor,
          borderColor,
          email,
        })
      );
      toast.success("successfully created");
      router.push("/");
      setLoading(true);
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  useEffect(() => {
    const filteredUser = create.filter(
      (userData: any) => userData.email === session?.user?.email
    );
    setUser(filteredUser as any);
  }, [create]);

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
    data1,
    data,
    setData,
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
    loading,
  };
};

export default useCreate;
