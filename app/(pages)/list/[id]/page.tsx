"use client";
import Image from "next/image";
import icon from "../../../../public/icon.png";
import setting from "../../../../public/Tune.png";
import useList from "../useList";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const { color, text, setTitle, title, border, fetchData, data } = useList({
    params: { id: params.id },
  });

  return (
    <>
      <div
        className={`${color} bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px] h-[96px] flex justify-between `}
      >
        <Image
          src={icon}
          alt="Not found image"
          className="w-[48px] h-[48px] mt-[24px] ml-[24px] "
        />
        <Link href={`/setting/${params.id}`}>
          <Image
            src={setting}
            alt="Not found image"
            className="w-[48px] h-[48px] mt-[24px] mr-[24px]"
          />
        </Link>
      </div>
      <div
        className={`${color} h-auto bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px]`}
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
        <div className="mt-[49px] ml-[350px] ">
          {data &&
            data.map((item: any, index: number) => (
              <div key={index} className="flex  py-[14px] ">
                <input
                  type="form-checkbox"
                  className={`h-[48px] w-[48px] rounded-lg ${text} ring-2 focus:ring-${border}  ${color}   border-none cursor-auto appearance-none accent-red-100 `}
                />

                <p className={`${text}`}>Title: {item.title}</p>
              </div>
            ))}
        </div>

        <div className="border-4 w-24 bg-purple-500">
          <button onClick={fetchData}>List Add</button>
        </div>
      </div>
    </>
  );
}
