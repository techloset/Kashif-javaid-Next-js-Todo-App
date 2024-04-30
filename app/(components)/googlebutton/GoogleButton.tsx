import Image from "next/image";
import React from "react";
import GoogleImage from "../../../public/google.png";
import { ButtonTypes } from "@/types";
export default function GoogleButton(props: ButtonTypes) {
  return (
    <>
      <div className="flex justify-center mt-[64px]  ">
        <button
          className="flex w-[100%] items-center  px-4 py-[12px]  lg:px-8 border-orange-500
             border-4 rounded-full text-center"
          onClick={props.onClick}
        >
          <Image src={GoogleImage} width={48} height={48} alt="Google Image" />
          <h1 className=" w-[100%]  h-[39px] py-1 md:py-0 text-orange-500 text-25px sm:text-25px md:text-20px xl:text-30px font-IBM_Plex_Mono font-medium">
            {props.title}
          </h1>
        </button>
      </div>
    </>
  );
}
