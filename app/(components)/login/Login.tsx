"use client";
import Image from "next/image";
import NavbarImage from "../../../public/navbar.png";
import LabelText from "@/app/(components)/labelText/LabelText";
import InputField from "@/app/(components)/inputField/InputField";
import GoogleButton from "@/app/(components)/googlebutton/GoogleButton";
import Button from "@/app/(components)/button/Button";
import { signIn } from "next-auth/react";
import useLogin from "./useLogin";
import Link from "next/link";

export default function Login() {
  const { email, setEmail, password, setPassword, handler } = useLogin();

  return (
    <>
      <div className="h-[900px] bg-black bg-[radial-gradient(white_1px,transparent_2px)] [background-size:16px_16px]">
        <Image src={NavbarImage} alt="Image Not Found" />
        <div className="mt-[60px] w-[100%] sm:w-[60%] md:w-[50%] lg:w-[35%] px-3  mx-auto">
          <LabelText name="Email" />
          <InputField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="">
            <LabelText name="Password" />
          </div>
          <InputField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center sm:ml-[40%] ">
            <Link href={"/changePassword"}>
              <h1 className=" text-20px text-white mt-4 ml-[120px]">
                Forget Password
              </h1>
            </Link>
          </div>
          <GoogleButton
            title="Sign In with Google"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          />
          <Button title="Sign In" onClick={handler} />
        </div>
        <div className="absolute   right-0 pt-[20px] flex  mr-2 text-100px text-white">
          <h1 className="text-100px pt-2"> Sign In</h1>
          <h1 className="text-100px text-orange-500">.</h1>
        </div>
      </div>
    </>
  );
}
