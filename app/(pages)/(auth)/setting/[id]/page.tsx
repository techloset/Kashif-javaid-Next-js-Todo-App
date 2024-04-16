"use client";
import Image from "next/image";
import navbarimage from "../../../../../public/forget.png";
import headerimage from "../../../../../public/Lists.png";
import profileimage from "../../../../../public/profile .png";

import InputField from "@/app/(components)/inputField/InputField";
import LabelText from "@/app/(components)/labelText/LabelText";
import useSetting from "./useSetting";
export default function Page({ params }: { params: { id: string } }) {
  const { name, setName, email, setEmail, setImage, handlersubmit } =
    useSetting({
      params: { id: params.id },
    });

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

          <form className="opacity-0 absolute w-[156px] h-[156px] rounded-full border-2 bg-custom-background-color flex justify-center items-center cursor-pointer">
            <input
              type="file"
              name="file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
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
          <div className="text-orange-600 flex justify-center mt-[69px]  ">
            <button
              className="border-4 text-30px font-medium border-orange-600 rounded-full h-[63.73px]  py-[5px] 
            w-[318.1px] px-[24px]"
            >
              Change Password
            </button>
          </div>
          <div
            className="flex justify-center mt-[36.27px]"
            onClick={handlersubmit}
          >
            <button className="w-[318px] h-[63px] border border-orange-600 bg-orange-600 rounded-full font-medium text-30px px-[24px]  py-[5px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
