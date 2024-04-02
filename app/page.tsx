"use client";
import Image from "next/image";
import header from "../public/header.png";
import navbar from "../public/Lists.png";
import Link from "next/link";
import { signOut } from "next-auth/react";
import usePage from "./usePage";
import { TodoItem } from "@/types";

export default function Page() {
  const { data } = usePage();

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
      <div className="ml-[295px] text-64px ">
        <div>
          <div className="w-auto flex flex-col">
            {data &&
              data.map((item: TodoItem, index: number) => {
                return (
                  <div key={index} className="w-fit  h-[83px]">
                    <div className="text-white ">
                      <h1
                        className={`  text-white h-[18px] my-2  ${item.color}`}
                      >
                        <div>
                          <h1 className="inline-block relative bottom-14 right-2">
                            {item.title}
                          </h1>
                        </div>
                      </h1>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex h-fit">
        <div className="flex mt-[18px] text-white ml-[295px] ">
          <div className="border-custom-border5 border-b-[16px] flex text-64px ">
            <div className="flex ">
              <h1 className="mr-3 relative right-2 top-10">+</h1>
              <h1 className="relative right-3 top-10">
                <Link href={"/createtodo"}>Add List.</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
