"use client";
import Image from "next/image";
import navbarImage from "../../../public/navbar.png";
import ListImage from "../../../public/Lists.png";
import InputField from "@/app/(components)/inputField/InputField";
import LabelText from "@/app/(components)/labelText/LabelText";
import GoogleButton from "@/app/(components)/googlebutton/GoogleButton";
import Button from "@/app/(components)/button/Button";
import { useState } from "react";
export default function page(props: { title: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <Image src={navbarImage} alt="image not found"></Image>
        <div className="mt-[64px]"></div>
        <div>
          <LabelText name="Name" />
          <InputField
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LabelText name="Email" />
          <InputField
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelText name="Password" />
          <InputField
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h1 className="flex justify-center mr-[260px] text-white mb-2">
            Confirm Password
          </h1>
          <InputField
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <GoogleButton title="Sign Up with Google" />
        <Button title="Sign Up" />
        <div className="flex justify-center mr-28 mt-[21px]">
          <h1 className="text-white font-medium text-xl">
            Already have an account?
          </h1>
          <h1 className="ml-2 text-orange-500 text-xl underline">Log In</h1>
        </div>
        <div className="pb-3 pt-[113px] flex justify-end  items-end  mr-2 text-8xl text-custom-signup font-normal ">
          sign up.
        </div>
      </div>
    </>
  );
}
