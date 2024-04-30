"use client";
import Image from "next/image";
import navbarImage from "../../../public/navbar.png";
import InputField from "@/app/(components)/inputField/InputField";
import LabelText from "@/app/(components)/labelText/LabelText";
import GoogleButton from "@/app/(components)/googleButton/GoogleButton";
import Button from "@/app/(components)/button/Button";

import Link from "next/link";
import { signIn } from "next-auth/react";
import useSignUp from "./useSignUp";

export default function SignUp(params: { title: string }) {
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
    loading,
  } = useSignUp();

  return (
    <>
      <div className="bg-black bg-[radial-gradient(white_1px,transparent_2px)] [background-size:16px_16px]">
        <Image src={navbarImage} alt="Navbar Image"></Image>
        <div className="mt-[64px]"></div>
        <div className="w-[100%] sm:w-[60%] md:w-[50%] lg:w-[30%]  mx-auto px-3">
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
          <div className="">
            <LabelText name="Password" />
          </div>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h1 className="flex ml-[20px] text-30px text-white mb-2">
            Confirm Password
          </h1>
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <GoogleButton
            title="Sign Up with Google"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            isLoading={loading}
          />

          <Button title="Sign Up" onClick={formHandle} isLoading={loading} />
        </div>

        <div className="flex justify-center flex-wrap mr-[90px] mt-[18px]">
          <h1 className="text-white font-medium text-20px mt-2 font-IBM_Plex_Mono ">
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
