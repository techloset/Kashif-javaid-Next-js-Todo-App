import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Item, Setting, SettingData, Settings } from "@/types";
import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";
import { FetchUser } from "@/app/store/slices/createTodoSlice/fetchUserSlice";
import {
  resetState,
  updateSetting,
} from "@/app/store/slices/settingsSlice/updateUserSettingSlice";

export default function useSetting({ params }: { params: { id: string } }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<Item[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useAppDispatch();
  const fetch = useAppSelector((state) => state.userFetch.data);
  const setting = useAppSelector((state) => state.settingPage.data);
  useEffect(() => {
    dispatch(FetchUser());
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
      })
    );

    await dispatch(resetState());
  };

  useEffect(() => {
    imageUrl;
  }, [dispatch, imageUrl, updateSetting]);

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
