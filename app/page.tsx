"use client";
import Image from "next/image";
import header from "../public/header.png";
import navbar from "../public/Lists.png";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url(${navbar.src})`,
        backgroundSize: "100vh 100vh",
        minHeight: "170vh",
      }}
    >
      <Image src={header} alt="Image Not found" />
      <button
        className="ml-5 text-white text-20px border-[3px] px-2 py-1 border-orange-600 rounded-full"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Signout
      </button>

      <div className="flex justify-center">
        <h1 className="text-white mt-[16px] text-124px font-normal ">
          Todo Lists
        </h1>
        <h1 className="text-orange-600 text-124px font-normal">.</h1>
      </div>
      <div className="text-white ml-[295px] text-64px ">
        <Link href={"/home"}>
          <div className="border-custom-border1 border-b-8 w-[178px] ">
            <h1 className="relative right-2 top-8">Home</h1>
          </div>
        </Link>

        <div className="border-custom-border2 border-b-8 w-[164px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/work"}>Work</Link>
          </h1>
        </div>

        <div className="border-custom-border3 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/home"}>Home</Link>
          </h1>
        </div>

        <div className="border-custom-border4 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/work"}>Work</Link>
          </h1>
        </div>
        <div className="border-orange-600 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/home"}>Home</Link>
          </h1>
        </div>

        <div className="border-orange-600 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/work"}>Work</Link>
          </h1>
        </div>
      </div>

      <div className="flex h-fit">
        <div className="flex mt-[18px] text-white ml-[295px] ">
          <div className="border-custom-border5 border-b-[16px] flex text-64px ">
            <Link href={"/createtodo"} className="flex ">
              <h1 className="mr-3 relative right-2 top-10">+</h1>
              <h1 className="relative right-3 top-10">
                <Link href={"/createtodo"}>Add List.</Link>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
