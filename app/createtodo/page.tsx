"use client";
import Image from "next/image";
import header from "../../app/../public/header.png";
import navbar from "../../public/Lists.png";
import InputField from "../(components)/inputField/InputField";
import Button from "../(components)/button/Button";
import useCreate from "./useCreate";
export default function page() {
  const { title, setTitle, formHandler } = useCreate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${navbar.src})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <Image src={header} alt="Header Image" />
        <div className="mt-[140px]">
          <InputField
            type="text"
            placeholder="Add Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Button title="add todo" onClick={formHandler} />
        </div>
      </div>
    </>
  );
}
