import { ButtonTypes } from "@/types";
import React from "react";

export default function AddButton(props: ButtonTypes) {
  return (
    <>
      <div className="flex justify-center items-center mt-[91px]">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300 ease-in-out w-[210px] h-[63px] rounded-full"
          onClick={props.onClick}
          disabled={props.isLoading}
        >
          {props.isLoading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          ) : (
            <h1 className=" text-30px  font-IBM_Plex_Mono font-medium ">
              Add List.
            </h1>
          )}
        </button>
      </div>
    </>
  );
}
