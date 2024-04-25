import { useState } from "react";
import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "@/app/store/hook/hook";

import {
  resetState,
  updateSetting,
} from "@/app/store/slices/settingsSlice/updateUserSettingSlice";
import { useRouter } from "next/navigation";

export default function useUpdate({ params }: { params: { id: string } }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const route = useRouter();
  const dispatch = useAppDispatch();
  const setting = useAppSelector((state) => state.settingPage.data);
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
    toast.success("Updated successfully");
    await dispatch(resetState());
    route.back();
  };

  return {
    handleSubmit,
    password,
    setPassword,
  };
}
