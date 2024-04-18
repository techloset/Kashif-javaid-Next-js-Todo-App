"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon from "../../../../public/icon.png";
import setting from "../../../../public/Tune.png";
import useList from "../useList";
import Link from "next/link";
import { List } from "@/types";
import Button from "@/app/(components)/button/Button";
import AddButton from "@/app/(components)/addbutton/AddButton";

export default function Page({
  params,
}: {
  params: { title: string; id: string };
}) {
  const {
    color,
    text,
    setTitle,
    title,
    border,
    fetchData,
    data,
    checkedItems,
    handleToggleCheck,
  } = useList({
    params: { id: params.id },
  });

  return (
    <>
      <div
        className={`bg-${color} bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px] h-[96px] flex justify-between `}
      >
        <Image
          src={icon}
          alt="Not found image"
          className="w-[48px] h-[48px] mt-[24px] ml-[24px] "
        />
        <Link href={`/`}>
          <Image
            src={setting}
            alt="Not found image"
            className="w-[48px] h-[48px] mt-[24px] mr-[24px]"
          />
        </Link>
      </div>
      <div
        className={`bg-${color} h-screen bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px]`}
      >
        <div className="flex justify-center pt-[48px] ">
          <h1 className={`text-124px ${text}`}>Home List</h1>
          <h1 className={`text-124px h-1  ${text} `}>.</h1>
        </div>
        <div className={`mx-auto w-[597px] `}>
          <input
            type="text"
            name="text"
            placeholder="Add List"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={` bg-${color} text-30px pl-4 rounded-2xl ${border} border-4 outline-none w-[597px]  h-[58px] `}
          />
        </div>
        <div className="mt-[49px] ml-[350px] py-[14px]  ">
          {data &&
            data.map((item: List, index: number) => (
              <div key={index} className="flex flex-col ">
                <div className="flex">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    className={`h-[48px] mr-3 py-[10px] w-[48px] rounded-lg ${text} ring-2 ring-${border} ${color} border-none cursor-auto appearance-none checked:appearance-auto  relative bottom-2`}
                    onChange={() => handleToggleCheck(item.id)}
                  />
                  <h1
                    className={`w-fit h-[20px]  border-b-8 ${
                      checkedItems.includes(item.id)
                        ? border
                        : "border-transparent"
                    }`}
                  >
                    <div>
                      <h1 className="text-64px relative bottom-10 right-2">
                        <h1 className={`${text}`}> {item.title}</h1>
                      </h1>
                    </div>
                  </h1>
                </div>
              </div>
            ))}
        </div>

        <AddButton title="Add List" onClick={fetchData} />
      </div>
    </>
  );
}
