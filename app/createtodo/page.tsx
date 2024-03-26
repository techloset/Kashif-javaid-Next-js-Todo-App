"use client";
import header from "../../public/header.png";
import navbar from "../../public/Lists.png";
import useCreate from "./useCreate";
import InputField from "../(components)/inputField/InputField";
import Image from "next/image";
import { TodoItem } from "@/types";
import Link from "next/link";

export default function Page() {
  const { title, setTitle, data, addlist } = useCreate();
  const customColors = [
    "bg-custom-todo1",
    "bg-custom-todo2",
    "bg-custom-todo3",
    "bg-custom-todo4",
    "bg-custom-todo5",
    "bg-custom-todo6",
    "bg-custom-todo7",
    "bg-custom-todo8",
    "bg-custom-todo9",
  ];
  const customTexts = [
    "text-custom-text-todo1",
    "text-custom-text-todo2",
    "text-custom-text-todo3",
    "text-custom-text-todo4",
    "text-custom-text-todo5",
    "text-custom-text-todo6",
    "text-custom-text-todo7",
    "text-custom-text-todo8",
    "text-custom-text-todo9",
  ];

  const customBorders = [
    "border-custom-border-todo1",
    "border-custom-border-todo2",
    "border-custom-border-todo3",
    "border-custom-border-todo4",
    "border-custom-border-todo5",
    "border-custom-border-todo6",
    "border-custom-border-todo7",
    "border-custom-border-todo8",
    "border-custom-border-todo9",
  ];
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${navbar.src})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <Image src={header} alt="Header Image" />
      <div className="mt-[125px]">
        <InputField
          type="text"
          placeholder="Add Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="w-[920px] grid grid-cols-3 mx-auto gap-8 mt-[56px] ">
        {data &&
          data.map((item: TodoItem, index: number) => {
            const colorClass = `${
              customColors[index % customColors.length]
            } rounded-full`;
            const textClass = `${customTexts[index % customTexts.length]}`;
            const borderClass = `${
              customBorders[index % customBorders.length]
            } border-4`;
            return (
              <div key={item.id}>
                <div className={`${colorClass} ${borderClass}`}>
                  <Link href={`/edittodo/${item.id}`}>
                    <h1
                      className={`w-[277px] h-[58px] rounded-full text-3xl font-medium p-3  px-20 py-5 ${textClass}`}
                    >
                      {item.title}
                    </h1>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex justify-center items-center mt-[91px] ">
        <button
          className="bg-orange-500 w-[210px] h-[63px] rounded-full"
          onClick={addlist}
        >
          <h1 className="font-medium text-3xl">Add List.</h1>
        </button>
      </div>
    </div>
  );
}
