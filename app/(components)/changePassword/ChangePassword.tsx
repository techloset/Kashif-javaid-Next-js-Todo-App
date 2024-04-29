"use client";
import Image from "next/image";
import NavbarImage from "../../../public/navbar.png";
import ListImage from "../../../public/Lists.png";
import LabelText from "@/app/(components)/labelText/LabelText";
import InputField from "@/app/(components)/inputField/InputField";
import AddButton from "@/app/(components)/addButton/AddButton";
import useChangePassword from "./useChangePassword";
export default function ChangePassword() {
  const { email, setEmail, handlerForget } = useChangePassword();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ListImage.src})`,
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Image src={NavbarImage} alt="Navbar Logo" />
        <div className="mt-[181px]  w-[100%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[33%]  px-2">
          <LabelText name="Email" />
          <InputField
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className="flex justify-center mr-[260px] text-white mb-2"></h1>
        </div>
        <div className="flex justify-center mt-[64px] ">
          <AddButton title="submit" onClick={handlerForget} isLoading />
        </div>
      </div>
    </>
  );
}
