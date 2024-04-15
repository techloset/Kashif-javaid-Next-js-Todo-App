import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function useSetting() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState<string>("");

  const cloud = "dk48g8htz";
  const UPLOAD_PRESET = "todo-app";

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/register", {});
      const responseData = res.data.data;
      const userData = responseData[0];

      const { id } = userData;
      setData(responseData);

      try {
        const uploadRes = await axios.put(
          `http://localhost:3000/api/register`,
          {
            imageUrl: imageUrl,
            userId: id,
          }
        );
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlersubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
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

      const imageUrl = res.data.secure_url;
      setImageUrl(imageUrl);

      fetchData();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    name,
    setName,
    email,
    setEmail,
    setImage,
    handlersubmit,
  };
}
