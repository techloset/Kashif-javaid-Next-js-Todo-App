"use client";
import Image from "next/image";
import navbar from "../../public/Lists.png";
import header from "../../public/header.png";
import InputField from "../(components)/inputField/InputField";
import usePage from "./[id]/page";

export default function Page({ id }: { id: string }) {
  const { edit, setEdit, handleEdit, topic } = usePage(id);

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
        {topic && ( // Check if topic is not null
          <div className="mt-[125px]">
            <InputField
              type="text"
              placeholder="Edit Todo"
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
            />
          </div>
        )}
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
