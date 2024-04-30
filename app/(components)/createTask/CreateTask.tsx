"use client";
import Image from "next/image";
import icon from "../../../public/icon.png";
import removeicon from "../../../public/remove.svg";
import editicon from "../../../public/edit.svg";
import setting from "../../../public/Tune.png";
import Link from "next/link";
import { List, ParamsList } from "@/types";
import AddButton from "@/app/(components)/addButton/AddButton";
import useAddList from "./useCreateTask";

export default function CreateTask({ params }: { params: ParamsList }) {
  const {
    color,
    text,
    setTitle,
    title,
    border,
    addList,
    checkedItems,
    handleToggleCheck,
    removeTopic,
    fetchdata,
    heading,
    loading,
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
          alt="Logo"
          className="w-[48px] h-[48px] mt-[24px] ml-[24px] "
        />
        <Link href={`/`}>
          <Image
            src={setting}
            alt="Setting"
            className="w-[48px] h-[48px] mt-[24px] mr-[24px]"
          />
        </Link>
      </div>
      <div
        className={`${color} ${
          fetchdata?.length ? "h-fit" : "h-[800px]"
        } bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px]`}
      >
        <div className="flex justify-center pt-[48px] ">
          <h1
            className={`text-64px sm:text-124px font-Stint_Ultra_Condensed font-normal ${text}`}
          >{`${heading}`}</h1>
          <h1
            className={` text-64px sm:text-124px h-1 font-Stint_Ultra_Condensed font-normal ${text} `}
          >
            .
          </h1>
        </div>
        <div
          className={` w-full flex justify-center px-3 font-IBM_Plex_Mono font-medium `}
        >
          <input
            type="text"
            name="text"
            placeholder="Add List"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`placeholder-${border} ${color} text-${text} text-30px pl-4 rounded-2xl font-IBM_Plex_Mono font-medium  ${border} w-[100%] sm:w-[50%] md:w-[40%] lg:w-[35%] border-4 outline-none h-[58px]   `}
          />
        </div>
        <div className="mt-[49px] ml-[100px] sm:ml-[350px]  py-[14px]  flex flex-col">
          {fetchdata &&
            fetchdata.map((item: List, index: number) => (
              <div key={index} className="flex flex-col justify-center ">
                <div className="flex">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    className={`h-[48px] mr-3 py-[10px] w-[48px] rounded-lg ${text} ring-2 ring-${border} ${color} border-none cursor-auto appearance-none checked:appearance-auto  relative 
                    bottom-2  `}
                    onChange={() => handleToggleCheck(item.id)}
                  />
                  <h1
                    className={`flex  w-fit h-[20px]   border-b-8 ${
                      checkedItems.includes(item.id)
                        ? border
                        : "border-transparent"
                    }`}
                  >
                    <div className="font-IBM_Plex_Mono font-medium ">
                      <h1 className="text-64px sm:relative sm:bottom-10  font-IBM_Plex_Mono font-medium ">
                        <h1
                          className={`${text} font-IBM_Plex_Mono font-medium text-balance relative bottom-10 sm:bottom-0 sm:top-1`}
                        >
                          {item.title}
                        </h1>
                      </h1>
                    </div>
                  </h1>
                </div>

                <div className="flex flex-row  ">
                  <Link href={`/editTask/${item.id}`}>
                    <Image
                      src={editicon}
                      alt="Edit Task"
                      className="lg:ml-[500px] relative bottom-3 lg:relative lg:bottom-16 "
                    />
                  </Link>

                  <button onClick={() => removeTopic(item.id)}>
                    <Image
                      src={removeicon}
                      alt="Remove Task"
                      className="sm:relative  relative bottom-3 lg:relative lg:bottom-16"
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>

        <AddButton title="Add List" onClick={addList} isLoading={loading} />
      </div>
    </>
  );
}
