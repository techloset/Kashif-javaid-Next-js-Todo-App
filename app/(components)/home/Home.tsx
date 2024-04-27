"use client";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/icon.png";
import setting from "../../../public/setting.png";
import Loader from "../loader/Loader";
import useHome from "./useHome";
import { ALLdata, Item } from "@/types";
export default function Home() {
  const { user, isLoading, fetch } = useHome();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`bg-black bg-[radial-gradient(#818181_1px,transparent_6px)] [background-size:16px_16px]`}
        >
          <div className="flex justify-between h-[96px] ">
            <Image
              src={icon}
              alt="Not found"
              className="w-[48px] h-[48px] mt-[24px] ml-[24px] "
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

          <div
            className={`${
              fetch.length ? "h-fit" : "h-screen"
            } py-10  bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px]`}
          >
            <div className="flex justify-center">
              <h1 className="text-white mt-[16px]  text-25px md:text-124px font-normal font-Stint_Ultra_Condensed ">
                Todo Lists
              </h1>
              <h1 className="text-orange-600 text-64px md:text-124px font-normal font-Stint_Ultra_Condensed">
                .
              </h1>
            </div>
            <div className="ml-[30px] sm:ml-[295px] md:ml-10 lg:ml-[295px] text-64px mt-[40px] md:mt-[70px] sm:mt-0">
              <div>
                <div className="w-auto flex flex-col">
                  {fetch &&
                    fetch.map((item: ALLdata, index: number) => {
                      return (
                        <div key={index} className="w-fit  h-[83px]">
                          <Link
                            href={{
                              pathname: `list/${item.id}`,
                              query: {
                                color: item.color,
                                border: item.textColor,
                                text: item.borderColor,
                                title: item.title,
                              },
                            }}
                          >
                            <div className="text-white ">
                              <h1
                                className={`text-white h-[18px] my-2 font-IBM_Plex_Mono ${item.color}`}
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
              <div
                className="flex mt-[18px] text-white   md:ml-10
                sm:ml-[295px] lg:ml-[295px]
              "
              >
                <div className="border-custom-border5 border-b-[16px] flex text-64px ">
                  <div className="flex ">
                    <h1 className="mr-3 relative right-2 top-10">+</h1>
                    <h1 className="relative right-3 top-10 font-IBM_Plex_Mono font-medium">
                      <Link href={"/createtodo"}>Add List.</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
