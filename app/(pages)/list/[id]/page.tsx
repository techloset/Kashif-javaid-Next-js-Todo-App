"use client";
import Image from "next/image";
import icon from "../../../../public/icon.png";
import setting from "../../../../public/Tune.png";
import useList from "../useList";

export default function Page({ params }: { params: { id: string } }) {
  const { color, text, setTitle, title, border, fetchData, data } = useList({
    params: { id: params.id },
  });

  return (
    <>
      <div className={`${color} h-[96px] flex justify-between `}>
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
        className={`${color} h-auto bg-[radial-gradient(#F9F5EB_1px,transparent_2px)] [background-size:16px_16px]`}
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
            className={` ${color} text-30px pl-4 rounded-2xl ${border} border-4 outline-none w-[597px]  h-[58px] `}
          />
        </div>
        {data &&
          data.map((item: any, index: number) => (
            <div key={index}>
              <p className={`${text}`}>Title: {item.title}</p>
            </div>
          ))}

        <div className="border-4 w-24 bg-purple-500">
          <button onClick={fetchData}>List Add</button>
        </div>
      </div>
    </>
  );
}
