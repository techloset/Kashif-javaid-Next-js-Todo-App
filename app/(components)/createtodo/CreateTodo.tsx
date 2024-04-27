"use client";
import InputField from "@/app/(components)/inputField/InputField";
import AddButton from "@/app/(components)/addButton/AddButton";
import useCreate from "./useCreate";
import icon from "../../../public/icon.png";
import setting from "../../../public/setting.png";
import Image from "next/image";
import Link from "next/link";
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
    <>
      <div className=" bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px] h-fit xl:h-screen">
        <div className="bg-black bg-[radial-gradient(#818181_1px,transparent_6px)] [background-size:16px_16px] ">
          <div className="flex justify-between h-[96px]">
            <Image
              src={icon}
              alt="Not"
              className="w-[48px] h-[48px] mt-[24px] ml-[24px]"
            />
            <Link href={"/"}>
              <Image
                src={setting}
                alt="Not"
                className="w-[48px] h-[48px] mt-[24px] mr-[24px]"
              />
            </Link>
          </div>
        </div>
        <div className="mt-[125px] w-[100%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[33%] px-3">
          <InputField
            type="text"
            placeholder="Add Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div
          className={`w-[60%] md:w-[70%] lg:w-[60%]   sm:gap-10  lg:gap-x-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-[21px] mt-[56px] `}
        >
          {customColors.map((color, index: number) => (
            <div
              key={index}
              className={`w-full h-[58px] rounded-full text-center cursor-pointer pt-2 px-2 font-medium text-28px ${customColors[index]} ${customTextColors[index]} border-4 ${customBorders[index]} font-IBM_Plex_Mono font-medium  `}
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
    </>
  );
}
