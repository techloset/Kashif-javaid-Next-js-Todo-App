import React from "react";
export default function LabelText(props: { name: string }) {
  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="flex  w-full ml-[20px] text-30px text-white mb-2"
        >
          {props.name}
        </label>
      </div>
    </>
  );
}
