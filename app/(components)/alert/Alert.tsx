import React from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = (props: { message: string }) => {
  return (
    <div role="alert" className="w-[350px]">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
