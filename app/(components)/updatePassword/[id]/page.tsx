"use client";
import React, { useState } from "react";
import icon from "../../../../public/icon.png";
import setting from "../../../../public/setting.png";
import Image from "next/image";
import Link from "next/link";
import LabelText from "../../labelText/LabelText";
import InputField from "../../inputField/InputField";
import AddButton from "../../addButton/AddButton";
export default function UpdatePassword({ params }: { params: { id: string } }) {
  const [password, setPassword] = useState("");
  const handle = () => {
    alert("Password updated");
  };
  return (
    <>
      <div
        className={`bg-black bg-[radial-gradient(#818181_1px,transparent_6px)] [background-size:16px_16px]`}
      >
        <div className="flex justify-between h-[96px] ">
          <Image
            src={icon}
            alt="Not Found"
            className="w-[48px] h-[48px] mt-[24px] ml-[24px]"
          />
          <Link href={`/setting/${params.id}`}>
            <Image
              src={setting}
              alt="Not Found"
              className="w-[48px]  pt-[24px] mr-[24px]"
            />
          </Link>
        </div>

        <div className="h-screen bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px] ">
          <div className="py-36">
            <div className="ml-16 ">
              <LabelText name=" Password" />
            </div>
            <InputField
              placeholder="Change Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AddButton title="Change password" onClick={handle} />
          </div>
        </div>
      </div>
    </>
  );
}
