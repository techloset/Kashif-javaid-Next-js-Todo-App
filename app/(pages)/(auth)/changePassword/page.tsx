"use client";
import Image from "next/image";
import NavbarImage from "../../../../public/navbar.png";
import ListImage from "../../../../public/Lists.png";
import LabelText from "@/app/(components)/labelText/LabelText";
import InputField from "@/app/(components)/inputField/InputField";
import { useState } from "react";
import AddButton from "@/app/(components)/addbutton/AddButton";
import axios from "axios";
export default function page() {
  const [email, setEmail] = useState("");
  const handlerForget = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/forgetpassword", {
        email,
      });
      if (res.status === 400) {
        alert("Email already exists");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${ListImage.src})`,
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Image src={NavbarImage} alt="Not Image found" />
        <div className="mt-[181px]">
          <LabelText name="Email" />
          <InputField
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className="flex justify-center mr-[260px] text-white mb-2"></h1>
        </div>
        <div className="flex justify-center mt-[64px] ">
          <AddButton title="submit" onClick={handlerForget} />
        </div>
      </div>
    </>
  );
}
