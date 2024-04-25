import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Item, SettingData } from "@/types";
import { URL } from "@/app/constance/url";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { FetchUser } from "@/app/store/slices/createTodoSlice/fetchUserSlice";

export default function useSetting({ params }: { params: { id: string } }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<Item[]>([]);
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useAppDispatch();
  const fetch = useAppSelector((state) => state.userFetch.data);

  useEffect(() => {
    dispatch(FetchUser());
  }, [dispatch]);

  useEffect(() => {
    const id = params.id;
    const currentUser = fetch.find((user: any) => user.id === id);

    if (currentUser) {
      setImageUrl(currentUser.imageUrl);
    }
  }, [fetch, params.id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (image) {
      const cloud = "dk48g8htz";
      const UPLOAD_PRESET = "todo-app";
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
      } catch (error) {
        toast.error("Error updating image");
        return;
      }
    }

    if (name || email || image) {
      const updateData: any = {};

      if (name) {
        updateData.name = name;
      }

      if (email) {
        updateData.email = email;
      }

      if (image) {
        updateData.imageUrl = imageUrl;
      }

      try {
        const updateRes = await axios.put(
          `${URL}/api/register/${params.id}`,
          updateData
        );

        toast.success("Successfully Updated");
      } catch (error) {
        toast.error("Error updating name/email");
      }
    } else {
      toast.error("Please provide either name or email for update");
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
    fetch,
  };
}
