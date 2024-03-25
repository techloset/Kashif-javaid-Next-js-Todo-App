"use client";
import header from "../../public/header.png";
import navbar from "../../public/Lists.png";
import useCreate from "./useCreate";
import InputField from "../(components)/inputField/InputField";
import Image from "next/image";
import { TodoItem } from "@/types";
import Button from "../(components)/button/Button";

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

  return (
    <div
      style={{
        backgroundImage: `url(${navbar.src})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
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
            return (
              <div key={index}>
                <div className={colorClass}>
                  <h1 className="w-[277px] h-[58px] rounded-full px-10 text-3xl font-medium p-3 mx-5">
                    {item.title}
                  </h1>
                </div>
              </div>
            );
          })}
      </div>
      <div className="">
        <Button title="add list" onClick={addlist} />
      </div>
    </div>
  );
}
