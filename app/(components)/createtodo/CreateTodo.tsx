"use client";
import Image from "next/image";
import navbar from "../../../public/Lists.png";
import header from "../../../public/header.png";

import InputField from "@/app/(components)/inputField/InputField";
import AddButton from "@/app/(components)/addButton/AddButton";
import useCreate from "./useCreate";
export default function Page() {
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
      <div
        className={`w-[920px] grid grid-cols-3 mx-auto gap-[21px] mt-[56px]`}
      >
        {customColors.map((color, index: number) => (
          <div
            key={index}
            className={`w-[277px] h-[58px] rounded-full text-center cursor-pointer pt-2 px-2 font-medium text-28px bg-${color} ${customTexts[index]} ${customBorders[index]} ${customTextColors[index]}`}
            onClick={() =>
              handleColorSelect(
                color,
                customTextColors[index],
                customBorders[index]
              )
            }
          >
            {customTexts[index]}
          </div>
        ))}
      </div>

      <AddButton title="Add List" onClick={addlist} />
    </div>
  );
}
