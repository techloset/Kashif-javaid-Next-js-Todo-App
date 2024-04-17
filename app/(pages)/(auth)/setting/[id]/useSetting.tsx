import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Item } from "@/types";

export default function useSetting({ params }: { params: { id: string } }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<Item[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");
  const cloud = "dk48g8htz";
  const UPLOAD_PRESET = "todo-app";

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/register", {});
      const responseData = await res.data.data;

      const userData = responseData;
      setData(userData);
      const id = params.id;
      const currentUser = responseData.find((user: Item) => user.id === id);

      if (currentUser) {
        setImageUrl(currentUser.imageUrl);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newImageUrl = uploadRes.data.secure_url;
      setImageUrl(newImageUrl);
      const updateRes = await axios.put(
        `http://localhost:3000/api/register/${params.id}`,
        { imageUrl: newImageUrl }
      );

      fetchData();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    setImage,
    handleSubmit,
    data,
    imageUrl,
  };
}
