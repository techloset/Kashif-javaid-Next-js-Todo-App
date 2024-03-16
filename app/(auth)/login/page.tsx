"use client";
import Image from "next/image";
import NavbarImage from "../../../public/navbar.png";
import ListImage from "../../../public/Lists.png";
import LabelText from "@/app/(components)/labelText/LabelText";
import InputField from "@/app/(components)/inputField/InputField";
import GoogleButton from "@/app/(components)/googlebutton/GoogleButton";
import Button from "@/app/(components)/button/Button";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Router from "next/router";
export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handler = (e: FormEvent) => {
    e.preventDefault();
    signIn("Sign", {
      email,
      password,
      redirect: false,
    });
    Router.replace("/");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ListImage.src})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <Image src={NavbarImage} alt="Image Not Found" />
        <div>
          <LabelText name="Email" />
          <InputField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className="flex justify-center mr-[260px] text-white mb-2">
            Confirm Password
          </h1>
          <InputField
            placeholder="Confirm password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h1 className="flex justify-center text-white pl-[300px] mt-[16px]">
            Forget Password
          </h1>
          <GoogleButton title="Sign In with Google" />
          <Button title="Sign In" onClick={handler} />
        </div>
        <div className="pb-3 pt-[113px] flex justify-end  items-end  mr-2 text-8xl text-custom-signup font-normal ">
          sign In.
        </div>
      </div>
    </>
  );
}
