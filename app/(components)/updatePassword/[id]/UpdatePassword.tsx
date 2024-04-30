"use client";
import icon from "../../../../public/icon.png";
import setting from "../../../../public/setting.png";
import Image from "next/image";
import Link from "next/link";
import LabelText from "../../labelText/LabelText";
import InputField from "../../inputField/InputField";
import AddButton from "../../addButton/AddButton";
import useUpdate from "../useUpdatePassword";
import { paramsId } from "@/types";
export default function UpdatePassword({ params }: { params: paramsId }) {
  const { handleSubmit, password, setPassword } = useUpdate({
    params: { id: params.id },
  });
  return (
    <>
      <div
        className={`bg-black bg-[radial-gradient(#818181_1px,transparent_6px)] [background-size:16px_16px]`}
      >
        <div className="flex justify-between h-[96px] ">
          <Image
            src={icon}
            alt="Logo"
            className="w-[48px] h-[48px] mt-[24px] ml-[24px]"
          />
          <Link href={`/setting/${params.id}`}>
            <Image
              src={setting}
              alt="Setting Logo"
              className="w-[48px]  pt-[24px] mr-[24px]"
            />
          </Link>
        </div>

        <div className="h-screen bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px] ">
          <div className="py-36 w-[100%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[35%] px-2">
            <div>
              <LabelText name="Password" />
            </div>
            <InputField
              placeholder="Change Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AddButton
              title="Change password"
              onClick={handleSubmit}
              isLoading={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
