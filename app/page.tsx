"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import usePage from "./usePage";
import { TodoItem, Item } from "@/types";
import icon from "../public/icon.png";
import setting from "../public/setting.png";
export default function Page() {
  const { data, user } = usePage();

  return (
    <div
      className={`bg-black bg-[radial-gradient(#818181_1px,transparent_6px)] [background-size:16px_16px]`}
    >
      <div className="flex justify-between h-[96px] ">
        <Image
          src={icon}
          alt="Not found"
          className="w-[48px] pt-[24px] ml-[24px]"
        />
        {user.map((user: Item, index) => (
          <div key={index} className="w-fit h-[83px]">
            <Link href={`/setting/${user.id}`}>
              <Image
                src={setting}
                alt="Not Found"
                className="w-[48px]  pt-[24px] mr-[24px]"
              />
            </Link>
          </div>
        ))}
      </div>

      <div className=" h-[900px] py-10  bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px]">
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
                      <Link
                        href={{
                          pathname: `list/${item.id}`,
                          query: {
                            color: item.color,
                            border: item.textColor,
                            text: item.borderColor,
                          },
                        }}
                      >
                        <div className="text-white ">
                          <h1
                            className={`text-white h-[18px] my-2  ${item.color}`}
                          >
                            <div>
                              <h1 className="inline-block relative bottom-14 right-2">
                                {item.title}
                              </h1>
                            </div>
                          </h1>
                        </div>
                      </Link>
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
    </div>
  );
}
