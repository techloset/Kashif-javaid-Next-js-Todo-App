"use client";
import Image from "next/image";
import navbarimage from "../../../public/forget.png";
import headerimage from "../../../public/Lists.png";
import profileimage from "../../../public/profile .png";
import LabelText from "@/app/(components)/labelText/LabelText";
import InputField from "@/app/(components)/inputField/InputField";
import { FormEvent, useState } from "react";
import Button from "@/app/(components)/button/Button";
import axios from "axios";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFiles] = useState<File | null>(null);

  const handler = () => {};

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await axios.post("api/uploadimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${headerimage.src})`,
          backgroundSize: "150vh",
          height: "100%",
        }}
      >
        <Image src={navbarimage} alt="not found" />

        <div className="flex justify-center mt-[60px]">
          <h1 className="text-white text-124px">Settings</h1>
          <h1 className="text-orange-500  text-124px">.</h1>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-[156px] h-[156px] rounded-full border-2 bg-custom-background-color flex justify-center items-center cursor-pointer">
            <Image
              src={profileimage}
              alt="not found"
              className="relative top-[50px] left-14 "
            />
          </div>
          <form
            onSubmit={handleSubmit}
            method="POST"
            enctype="multipart/form-data"
            className="opacity-0 absolute w-[156px] h-[156px] rounded-full border-2 bg-custom-background-color flex justify-center items-center cursor-pointer"
          >
            <input
              type="file"
              name="file"
              className="opacity-0 absolute w-[156px] h-[156px] rounded-full border-2 bg-custom-background-color flex justify-center items-center cursor-pointer"
            />
          </form>
        </div>

        <h1 className="flex justify-center mt-[11px] text-white font-normal text-30px">
          Profile Photo
        </h1>

        <div>
          <LabelText name="Name" />
          <InputField
            type="text"
            placeholder="Update Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LabelText name="Email" />
          <InputField
            type="email"
            placeholder="Update Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button title="Change Password" onClick={handler} />
        </div>
      </div>
    </>
  );
}
