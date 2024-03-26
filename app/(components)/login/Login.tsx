"use client";
import Image from "next/image";
import NavbarImage from "../../../public/navbar.png";
import ListImage from "../../../public/Lists.png";
import LabelText from "@/app/(components)/labelText/LabelText";
import InputField from "@/app/(components)/inputField/InputField";
import GoogleButton from "@/app/(components)/googlebutton/GoogleButton";
import Button from "@/app/(components)/button/Button";
import { signIn } from "next-auth/react";
import useLogin from "./useLogin";
export default function Login() {
  const { email, setEmail, password, setPassword, handler } = useLogin();

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
          <div className="ml-16">
            <LabelText name="Password" />
          </div>
          <InputField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center ml-[130px]">
            <h1 className=" text-20px text-white mt-4 ml-[120px]">
              Forget Password
            </h1>
          </div>
          <GoogleButton
            title="Sign In with Google"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          />
          <Button title="Sign In" onClick={handler} />
        </div>
        <div className="absolute bottom-0 right-0 pb-3 pt-28 mr-2 text-5xl text-white">
          Sign In
        </div>
      </div>
    </>
  );
}
