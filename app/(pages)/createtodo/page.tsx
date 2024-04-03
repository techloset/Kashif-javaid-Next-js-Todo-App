"use client";
import Image from "next/image";
import navbar from "../../../public/Lists.png";
import header from "../../../public/header.png";
import useCreate from "./useCreate";
import InputField from "@/app/(components)/inputField/InputField";

export default function Page() {
  const {
    title,
    setTitle,
    addlist,
    handleColorSelect,
    customBorders,
    customColors,
    customTextColors,
    customTexts,
  } = useCreate();

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${navbar.src})`,
        backgroundSize: "150vh",
        height: "100vh",
      }}
    >
      <Image src={header} alt="Header Image" />
      <div className="mt-[125px]">
        <InputField
          type="text"
          placeholder="Add Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div
        className={`w-[920px] grid grid-cols-3 mx-auto gap-[21px] mt-[56px]`}
      >
        {customColors.map((color, index: number) => (
          <div
            key={index}
            className={`w-[277px] h-[58px] rounded-full text-center cursor-pointer pt-2 px-2 font-medium text-28px ${color} ${customTexts[index]} ${customBorders[index]} ${customTextColors[index]}`}
            onClick={() =>
              handleColorSelect(
                color,
                customTextColors[index],
                customBorders[index]
              )
            }
          >
            {customTexts[index]}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-[91px] ">
        <button
          className="bg-orange-500 w-[210px] h-[63px] rounded-full"
          onClick={addlist}
        >
          <h1 className="font-medium text-3xl">Add List.</h1>
        </button>
      </div>
    </div>
  );
}

// "use client";
// import Image from "next/image";
// import navbar from "../../../public/Lists.png";
// import header from "../../../public/header.png";
// import useCreate from "./useCreate";
// import InputField from "@/app/(components)/inputField/InputField";
// import Link from "next/link";

// export default function Page() {
//   const {
//     title,
//     setTitle,
//     addlist,
//     handleColorSelect,
//     customBorders,
//     customColors,
//     customTextColors,
//     customTexts,
//   } = useCreate();

//   return (
//     <div
//       className="relative"
//       style={{
//         backgroundImage: `url(${navbar.src})`,
//         backgroundSize: "150vh",
//         height: "100vh",
//       }}
//     >
//       <Image src={header} alt="Header Image" />
//       <div className="mt-[125px]">
//         <InputField
//           type="text"
//           placeholder="Add Todo"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>
//       <div className="w-[920px] grid grid-cols-3 mx-auto gap-[21px] mt-[56px]">
//         {customColors.map((color, index: number) => (
//           <div
//             key={index}
//             className={`w-[277px] h-[58px] rounded-full text-center pt-2 px-2 font-medium text-28px ${color} ${customTexts[index]} ${customBorders[index]} ${customTextColors[index]}`}
//             onClick={() => handleColorSelect(color)}
//           >
//             {customTexts[index]}
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center items-center mt-[91px] ">
//         <button
//           className="bg-orange-500 w-[210px] h-[63px] rounded-full"
//           onClick={addlist}
//         >
//           <h1 className="font-medium text-3xl">Add List.</h1>
//         </button>
//       </div>
//     </div>
//   );
// }
