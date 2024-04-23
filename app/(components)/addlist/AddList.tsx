"use client";
import Image from "next/image";
import icon from "../../../public/icon.png";
import removeicon from "../../../public/remove.svg";
import editicon from "../../../public/edit.svg";
import setting from "../../../public/Tune.png";
import Link from "next/link";
import { List } from "@/types";
import AddButton from "@/app/(components)/addButton/AddButton";
import useAddList from "./useAddList";

export default function AddList({
  params,
}: {
  params: { title: string; id: string; todoId: string };
}) {
  const {
    color,
    text,
    setTitle,
    title,
    border,
    fetchData,
    data,
    checkedItems,
    handleToggleCheck,
    removeTopic,
  } = useAddList({
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
        <Link href={`/`}>
          <Image
            src={setting}
            alt="Not found image"
            className="w-[48px] h-[48px] mt-[24px] mr-[24px]"
          />
        </Link>
      </div>
      <div
        className={`${color} h-screen bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px]`}
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
            className={`${color} text-30px pl-4 rounded-2xl ${border} border-4 outline-none w-[597px]  h-[58px] `}
          />
        </div>
        <div className="mt-[49px] ml-[350px] py-[14px] flex flex-col">
          {data &&
            data.map((item: List, index: number) => (
              <div key={index} className="flex flex-col ">
                <div className="flex">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    className={`h-[48px] mr-3 py-[10px] w-[48px] rounded-lg ${text} ring-2 ring-${border} ${color} border-none cursor-auto appearance-none checked:appearance-auto  relative 
                    bottom-2`}
                    onChange={() => handleToggleCheck(item.id)}
                  />
                  <h1
                    className={`flex  w-fit h-[20px]   border-b-8 ${
                      checkedItems.includes(item.id)
                        ? border
                        : "border-transparent"
                    }`}
                  >
                    <div className="ml-[24px]">
                      <h1 className="text-64px relative bottom-10  ">
                        <h1 className={`${text} text-balance`}>
                          {" "}
                          {item.title}
                        </h1>
                      </h1>
                    </div>
                  </h1>
                </div>
                <div className="flex  w-[700px] ">
                  <Link href={`/edittodo/${item.id}`}>
                    <Image
                      src={editicon}
                      alt="not"
                      className=" relative ml-[500px] bottom-16"
                    />
                  </Link>

                  <button onClick={() => removeTopic(item.id)}>
                    <Image
                      src={removeicon}
                      alt="Remove"
                      className="relative right-2 bottom-16"
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>

        <AddButton title="Add List" onClick={fetchData} />
      </div>
    </>
  );
}
