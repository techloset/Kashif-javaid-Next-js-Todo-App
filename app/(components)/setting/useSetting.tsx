import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Item, paramsId } from "@/types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  resetState,
  updateSetting,
} from "@/app/store/slices/settingsSlice/updateUserSetting";

export default function useSetting({ params }: { params: paramsId }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<Item[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useAppDispatch();
  const setting = useAppSelector((state) => state.settingPage.data);
  const userFetch = useAppSelector((state) => state.userFetch.user);

  const handleSubmit = async () => {
    const id = params.id;
    await dispatch(
      updateSetting({
        params: { id: id },
        image: image,
        name: name,
        email: email,
        imageUrl: imageUrl,
        password: password,
      })
    );

    toast.success(" Updated successfully");

    await dispatch(resetState());

    setName("");
    setEmail("");
  };

  useEffect(() => {
    if (userFetch) {
      setName(userFetch.name);
      setEmail(userFetch.email);
      setImageUrl(userFetch.imageUrl);
    }
  }, [userFetch, imageUrl]);

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
    setData,
    setPassword,
    userFetch,
    setting,
  };
}
