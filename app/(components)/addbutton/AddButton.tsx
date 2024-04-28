import { ButtonTypes } from "@/types";
import React from "react";

export default function AddButton(props: ButtonTypes) {
  return (
    <>
      <div className="flex justify-center items-center mt-[91px] ">
        <button
          className="bg-orange-500 w-[210px] h-[63px] rounded-full"
          onClick={props.onClick}
        >
          <h1 className="font-medium text-30px">Add List.</h1>
        </button>
      </div>
    </>
  );
}
