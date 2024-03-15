"use client";
import Image from "next/image";
import NavbarImage from "../../../public/navbar.png";
import ListImage from "../../../public/Lists.png";
import LabelText from "@/app/(components)/labelText/LabelText";
import InputField from "@/app/(components)/inputField/InputField";
import { useState } from "react";
export default function page() {
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ListImage.src})`,
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Image src={NavbarImage} alt="Not Image found" />
        <div className="mt-[181px]">
          <LabelText name="Password" />
          <InputField
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className="flex justify-center mr-[260px] text-white mb-2">
            Confirm Password
          </h1>
          <InputField
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <h1 className="flex justify-center text-white pl-[300px] mt-[16px]">
            Forget Password
          </h1>
        </div>
        <div className="flex justify-center mt-[64px] ">
          <button className="bg-orange-500 w-[174px] h-[64px]  rounded-full">
            <h1 className="font-medium text-3xl">Sign Up</h1>
          </button>
        </div>
        <div className="pb-3 pt-[113px] flex justify-end  items-end  mr-2 text-8xl text-custom-signup font-normal ">
          Change Password.
        </div>
      </div>
    </>
  );
}
