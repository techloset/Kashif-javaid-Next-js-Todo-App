"use client";
import Image from "next/image";
import navbar from "../../../public/Lists.png";
import header from "../../../public/header.png";
import useCreate from "./useCreate";
import InputField from "@/app/(components)/inputField/InputField";
import { signOut } from "next-auth/react";

export default function CreateTodo() {
  const {
    title,
    setTitle,
    addlist,
    handleColorSelect,
    customBorders,
    customColors,
    customTextColors,
    customTexts,
  } = useCreate();

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${navbar.src})`,
        backgroundSize: "150vh",
        height: "100%",
      }}
    >
      <Image src={header} alt="Header Image" />
      <button
        className="ml-5 text-white text-20px border-[3px] px-2 py-1 mt-3 border-orange-600 rounded-full"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Signout
      </button>
      <div className="mt-[125px]">
        <InputField
          type="text"
          placeholder="Add Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-[920px] grid grid-cols-3 mx-auto gap-[21px] mt-[56px]">
        {customColors.map((color, index: number) => (
          <div
            key={index}
            className={`w-[277px] h-[58px] rounded-full text-center pt-2 px-2 font-medium text-28px cursor-pointer ${color} ${customTexts[index]} ${customBorders[index]} ${customTextColors[index]}`}
            onClick={() => handleColorSelect(color)}
          >
            {customTexts[index]}
          </div>
        ))}
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
