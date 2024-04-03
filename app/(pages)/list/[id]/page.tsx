"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import icon from "../../../../public/icon.png";
import setting from "../../../../public/Tune.png";

export default function Page({
  params,
}: {
  params: { id: string };
  color: string;
}) {
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
      <div className={`relative ${color} h-full`}>
        <div className={`relative bottom-20 flex flex-wrap`}>
          {Array.from({ length: 10000 }, (_, i) => (
            <div
              key={i}
              className={`h-[2px] w-[2px] rounded-full ${color} m-1`}
            ></div>
          ))}
        </div>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          neque dolore facere dolor recusandae quia nesciunt minus similique
          tempora laborum aliquam ea doloribus omnis! Doloribus sed iusto nam
          debitis dolorem!
        </h1>
        <h1>lorem200</h1>
      </div>
    </>
  );
}
