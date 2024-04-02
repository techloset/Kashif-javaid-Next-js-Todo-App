"use client";
import Image from "next/image";
import navbar from "../../../../public/Lists.png";
import header from "../../../../public/header.png";
import InputField from "@/app/(components)/inputField/InputField";
import useId from "./useId";

export default function Page({
  params,
}: {
  params: { id: string; title: string };
}) {
  const { id } = params;

  const { setTopicTitle, handleEdit } = useId(params);

  return (
    <>
      <div
        className="relative h-screen"
        style={{
          backgroundImage: `url(${navbar.src})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <Image src={header} alt="Image Not found" />

        <div className="mt-[125px]">
          <InputField
            type="text"
            placeholder="Edit Todo"
            onChange={(e) => setTopicTitle(e.target.value)}
          />
        </div>

        <div className="flex justify-center items-center mt-[91px] ">
          <button
            className="bg-orange-500 w-[210px] h-[63px] rounded-full"
            onClick={handleEdit}
          >
            <h1 className="font-medium text-3xl">Edit List.</h1>
          </button>
        </div>
      </div>
    </>
  );
}
