"use client";
import Image from "next/image";
import icon from "../../../public/icon.png";
import logout from "../../../public/Logout.png";
import profileimage from "../../../public/profile .png";
import useSetting from "./useSetting";
import { Settings } from "@/types";
import { signOut, useSession } from "next-auth/react";
import InputField from "../inputField/InputField";
import LabelText from "../labelText/LabelText";
import Link from "next/link";
export default function Setting({ params }: { params: { id: string } }) {
  const {
    data,
    name,
    setName,
    email,
    setEmail,
    setImage,
    handleSubmit,
    fetch,
  } = useSetting({
    params: { id: params.id },
  });
  const { data: session } = useSession();
  return (
    <>
      <div className=" bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px] h-full">
        <div className="bg-black  bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px] h-[96px]">
          <div className="flex justify-between">
            <Image
              src={icon}
              alt="not"
              className="w-[48px]  h-[48px] mt-[24px] ml-[24px]"
            />

            <Image
              src={logout}
              alt="not"
              className="w-[48px] h-[48px]  mt-[24px] mr-[24px] cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/login" })}
            />
          </div>
        </div>

        <div className="flex justify-center mt-[60px]">
          <h1 className="text-white text-64px sm:text-124px">Settings</h1>
          <h1 className="text-orange-500 text-64px sm:text-124px">.</h1>
        </div>

        <div className=" mx-auto mt-4">
          <div>
            <input
              type="file"
              name="file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="opacity-0 absolute w-[156px] h-[156px] rounded-full border-2 bg-custom-background-color flex justify-center items-center cursor-pointer "
            />
            <Image
              src={profileimage}
              alt="not found"
              className="relative top-[155px] left-10 mx-auto"
            />
          </div>
          {!fetch.some(
            (user: Settings) => user.id === params.id && user.imageUrl
          ) ? (
            <form className=" w-[156px] h-[156px] mx-auto rounded-full border-2 bg-custom-background-color ">
              <input
                type="file"
                name="file"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="opacity-0 absolute w-[156px] h-[156px] rounded-full border-2 bg-custom-background-color flex justify-center items-center cursor-pointer "
              />
            </form>
          ) : (
            fetch.map((user: Settings, index: number) => {
              if (user.id === params.id) {
                return (
                  <div key={index} className="flex justify-center">
                    <Image
                      src={user.imageUrl}
                      alt="User Image"
                      width={200}
                      height={200}
                      className="w-[156px] h-[150px] rounded-full bg-cover"
                    />
                  </div>
                );
              }
            })
          )}
        </div>

        <h1 className="flex justify-center mt-[11px] text-white font-normal text-30px">
          Profile Photo
        </h1>

        <div className=" w-[100%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[35%] px-2">
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
            w-[318.1px] px-[24px]"
              >
                Change Password
              </button>
            </Link>
          </div>
          <div
            className="flex justify-center mt-[36.27px]"
            onClick={handleSubmit}
          >
            <button className="w-[318px] h-[63px] border border-orange-600 bg-orange-600 rounded-full font-medium text-30px px-[24px]  py-[5px] mb-4 sm:mb-2 ">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
