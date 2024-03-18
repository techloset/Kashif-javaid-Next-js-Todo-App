import Image from "next/image";
import React from "react";
import GoogleImage from "../../../public/google.png";
export default function GoogleButton(props: {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <div className="flex justify-center mt-[64px]  ">
        <button
          className="flex w-[447px] h-[72px] items-center px-[24px] py-[12px] border-orange-500
             border-4 rounded-full text-center"
          onClick={props.onClick}
        >
          <Image
            src={GoogleImage}
            width={48}
            height={48}
            alt="Image not found"
          />
          <h1 className="  w-[339px] h-[39px]  text-orange-500 text-3xl font-medium">
            {props.title}
          </h1>
        </button>
      </div>
    </>
  );
}
