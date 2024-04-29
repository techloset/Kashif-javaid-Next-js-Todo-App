import { ButtonTypes } from "@/types";
export default function Button(props: ButtonTypes) {
  return (
    <div className="flex justify-center mt-[19px]  ">
      <button
        className="bg-orange-500 w-[100%] h-[63px] rounded-full "
        onClick={props.onClick}
        disabled={props.isLoading}
      >
        {props.isLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          </div>
        ) : (
          <h1 className="font-medium text-30px">{props.title}</h1>
        )}
      </button>
    </div>
  );
}
