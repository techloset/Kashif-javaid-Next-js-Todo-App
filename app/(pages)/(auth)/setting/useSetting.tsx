"use client";
import { FormEvent, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
export default function useSetting({ params }: { params: { id: string } }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const cloud = "dk48g8htz";
  const UPLOAD_PRESET = "todo-app";
  const handlersubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!image) {
      console.error("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = await res.data.secure_url;
      setImageUrl(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    try {
      await axios.post("http://localhost:3000/api/uploadimage", {
        imageUrl: imageUrl,
      });

      console.log(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    setImage,
    handlersubmit,
  };
}
