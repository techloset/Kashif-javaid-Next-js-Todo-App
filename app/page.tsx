import { signOut } from "next-auth/react";
import header from "../public/header.png";
import navbar from "../public/Lists.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${navbar.src})`,
        backgroundSize: "cover",
      }}
    >
      <Image src={header} alt="Image Not found" />
      <div className="flex justify-center">
        <h1 className="text-white mt-[16px] text-124px font-normal ">
          Todo Lists
        </h1>
        <h1 className="text-orange-600 text-124px font-normal">.</h1>
      </div>
      <div className="text-white ml-[295px] text-64px ">
        <Link href={"/home"}>
          <div className="border-custom-border1 border-b-8 w-[178px] ">
            <h1 className="relative right-2 top-8">Home</h1>
          </div>
        </Link>

        <div className="border-custom-border2 border-b-8 w-[164px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/work"}>Work</Link>
          </h1>
        </div>

        <div className="border-custom-border3 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/home"}>Home</Link>
          </h1>
        </div>

        <div className="border-custom-border4 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/work"}>Work</Link>
          </h1>
        </div>
        <div className="border-orange-600 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/home"}>Home</Link>
          </h1>
        </div>

        <div className="border-orange-600 border-b-8 w-[178px] ">
          <h1 className="relative right-3 top-8 w-[160px]">
            <Link href={"/work"}>Work</Link>
          </h1>
        </div>
      </div>

      <div className="flex">
        <div className="flex mt-[18px] text-white ml-[295px] ">
          <div className="border-custom-border5 border-b-[16px] flex text-64px ">
            <Link href={"/createtodo"} className="flex ">
              <h1 className="mr-3 relative right-2 top-10">+</h1>
              <h1 className="relative right-3 top-10">
                <Link href={"/createtodo"}>Add List.</Link>
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <Image src={navbar} alt="not" />
      </div>
    </div>
  );
}
