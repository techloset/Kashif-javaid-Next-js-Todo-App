import CreateTask from "@/app/(components)/createTask/CreateTask";
import { ParamsList } from "@/types";
import React from "react";

export default function page({ params }: { params: ParamsList }) {
  return (
    <div>
      <div
        className={` bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px]`}
      >
        <div>
          <div className=" bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px] ">
            <CreateTask params={params} />
          </div>
        </div>
      </div>
    </div>
  );
}
