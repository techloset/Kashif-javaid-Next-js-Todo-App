import React from "react";

export default function LabelText(props: { name: string }) {
  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="flex justify-center mr-[330px]  text-white mb-2"
        >
          {props.name}
        </label>
      </div>
    </>
  );
}
