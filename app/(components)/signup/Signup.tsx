"use client";
import Image from "next/image";
import navbarImage from "../../../public/navbar.png";
import InputField from "@/app/(components)/inputField/InputField";
import LabelText from "@/app/(components)/labelText/LabelText";
import GoogleButton from "@/app/(components)/googlebutton/GoogleButton";
import Button from "@/app/(components)/button/Button";
import useSignup from "./useSignup";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Signup(params: { title: string }) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmpassword,
    setConfirmPassword,
    formHandle,
  } = useSignup();

  return (
    <>
      <div className="bg-black bg-[radial-gradient(white_1px,transparent_2px)] [background-size:16px_16px]">
        <Image src={navbarImage} alt="image not found"></Image>
        <div className="mt-[64px]"></div>
        <div>
          <LabelText name="Name" />
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LabelText name="Email" />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="ml-16">
            <LabelText name="Password" />
          </div>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h1 className="flex justify-center mr-[140px] text-30px text-white mb-2">
            Confirm Password
          </h1>
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <GoogleButton title="Sign Up with Google" onClick={() => signIn()} />
        <Button title="Sign Up" onClick={formHandle} />
        <div className="flex justify-center mr-[90px] mt-[18px]">
          <h1 className="text-white font-medium text-20px mt-2">
            Already have an account?
          </h1>
          <Link href="/login">
            <h1 className="ml-2 text-orange-500 text-30px underline  pb-2">
              Log In
            </h1>
          </Link>
        </div>
        <div className="pb-3 pt-[113px] flex justify-end  items-end  mr-2 text-100px text-custom-signup font-normal ">
          <h1 className="text-100px">sign up</h1>
          <h1 className="text-100px text-orange-500">.</h1>
        </div>
      </div>
    </>
  );
}
