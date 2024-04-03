"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import icon from "../../../../public/icon.png";
import setting from "../../../../public/Tune.png";

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const color = searchParams.get("color");

  return (
    <>
      <div className={`${color} h-[96px] flex justify-between`}>
        <Image
          src={icon}
          alt="Not found image"
          className="w-[48px] h-[48px] mt-[24px] ml-[24px] "
        />
        <Image
          src={setting}
          alt="Not found image"
          className="w-[48px] h-[48px] mt-[24px] mr-[24px]"
        />
      </div>
      <div
        className={`${color}   h-full w-full bg-[radial-gradient(#F9F5EB_1px,transparent_2px)] [background-size:16px_16px]`}
      >
        <div className="flex justify-center pt-[48px] ">
          <h1 className="text-124px text-custom-home-color">Home List</h1>
          <h1 className={`text-124px h-1 text-custom-home-color `}>.</h1>
        </div>
        <div className="">
          <input
            type="text"
            name="text"
            className={` ${color} w-[597px]  h-[58px] `}
          />
        </div>
      </div>

      <div></div>
    </>
  );
}
