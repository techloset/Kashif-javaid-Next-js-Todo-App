import { InputType } from "@/types";

const InputField: React.FC<InputType> = ({
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center mb-2 ">
        <input
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
          className="w-[447px]
           h-[58px]
           rounded-full
            bg-custom-input
        
             border-orange-500
             border-4
            outline-none
            text-white
            px-8
            text-xl
               "
        />
      </div>
    </>
  );
};

export default InputField;
