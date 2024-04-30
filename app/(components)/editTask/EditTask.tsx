"use client";
import Image from "next/image";
import navbar from "../../../public/Lists.png";
import header from "../../../public/header.png";
import useEditTodo from "./useEditTask";
import InputField from "../inputField/InputField";
import { ParamsList } from "@/types";
export default function EditTodo({ params }: { params: ParamsList }) {
  const { setTopicTitle, handleEdit, topicTitle } = useEditTodo(params);
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
        <Image src={header} alt="Logo" />

        <div className="mt-[125px] w-full sm:w-[60%] md:w-[50%] lg:w-[30%]  mx-auto px-3">
          <InputField
            type="text"
            placeholder="Edit Todo"
            value={topicTitle}
            onChange={(e) => setTopicTitle(e.target.value)}
          />
        </div>

        <div className="flex justify-center items-center mt-[91px] ">
          <button
            className="bg-orange-500 w-[210px] h-[63px] rounded-full"
            onClick={handleEdit}
          >
            <h1 className="font-medium text-30px">Edit List.</h1>
          </button>
        </div>
      </div>
    </>
  );
}
