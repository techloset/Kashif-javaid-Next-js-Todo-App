import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Item, Settings } from "@/types";
import { useAppDispatch, useAppSelector } from "../../store/store";

import {
  resetState,
  updateSetting,
} from "@/app/store/slices/settingsSlice/updateUserSettingSlice";
import { fetchUser } from "@/app/store/slices/createTodoSlice/fetchUserSlice";

export default function useSetting({ params }: { params: { id: string } }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<Item[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useAppDispatch();
  const fetch = useAppSelector((state) => state.userFetch.data);
  const setting = useAppSelector((state) => state.settingPage.data);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    const id = params.id;
    const currentUser = fetch.find((user: Settings) => user.id === id);

    if (currentUser) {
      setImageUrl(currentUser.imageUrl);
    }
  }, [fetch, params.id]);

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
    dispatch(fetchUser());
    setName("");
    setEmail("");
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
    setData,
  };
}
