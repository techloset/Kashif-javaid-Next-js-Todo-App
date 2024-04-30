"use client";
import Image from "next/image";
import icon from "../../../public/icon.png";
import logout from "../../../public/Logout.png";
import profile from "../../../public/profile (2).png";
import profileimage from "../../../public/profile .png";
import useSetting from "./useSetting";
import { paramsId } from "@/types";
import { signOut, useSession } from "next-auth/react";
import InputField from "../inputField/InputField";
import LabelText from "../labelText/LabelText";
import Link from "next/link";
export default function Setting({ params }: { params: paramsId }) {
  const {
    name,
    setName,
    email,
    setEmail,
    setImage,
    handleSubmit,
    fetch,
    userFetch,
  } = useSetting({
    params: { id: params.id },
  });

  return (
    <>
      <div className="">
        <div className="bg-black  bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px] h-[96px]">
          <div className="flex justify-between">
            <Image
              src={icon}
              alt="Logo"
              className="w-[48px]  h-[48px] mt-[24px] ml-[24px]"
            />

            <Image
              src={logout}
              alt="Setting Logo"
              className="w-[48px] h-[48px]  mt-[24px] mr-[24px] cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/login" })}
            />
          </div>
        </div>

        <div className="flex justify-center mt-[60px]">
          <h1 className="text-white text-64px sm:text-124px font-Stint_Ultra_Condensed font-normal">
            Settings
          </h1>
          <h1 className="text-orange-500 text-64px sm:text-124px font-Stint_Ultra_Condensed font-normal">
            .
          </h1>
        </div>

        <div className=" mx-auto mt-4">
          <div className="">
            <label htmlFor="fileInput" className="cursor-pointer">
              <input
                id="fileInput"
                type="file"
                name="file"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="opacity-0 absolute w-[156px] h-[156px] rounded-full border-2 bg-custom-background-color"
              />
              <Image
                src={profileimage}
                alt="Profile Image"
                className="relative top-[155px] left-10 mx-auto cursor-pointer"
              />
            </label>
          </div>
          {userFetch.imageUrl ? (
            <div className="flex justify-center">
              <Image
                src={userFetch.imageUrl}
                alt="Profile image"
                width={200}
                height={200}
                className="w-[156px] h-[150px] rounded-full bg-cover"
              />
            </div>
          ) : (
            <Image
              src={profile}
              alt="not"
              className="w-[156px] mx-auto mb-10"
            />
          )}
        </div>

        <h1 className="flex justify-center mt-[11px] text-white font-normal font-IBM_Plex_Mono text-30px">
          Profile Photo
        </h1>

        <div className=" w-[100%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[33%]  px-2">
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
            <Link href={`/updatePassword/${params.id}`}>
              <button
                className="border-4 text-30px font-medium border-orange-600 rounded-full h-[63.73px]  py-[5px] 
            w-[318.1px] px-[24px] font-IBM_Plex_Mono "
              >
                Change Password
              </button>
            </Link>
          </div>
          <div
            className="flex justify-center mt-[36.27px]"
            onClick={handleSubmit}
          >
            <button className="w-[318px] h-[63px] border border-orange-600 bg-orange-600 rounded-full font-medium text-30px px-[24px]  py-[5px] mb-4 sm:mb-2  font-IBM_Plex_Mono">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
