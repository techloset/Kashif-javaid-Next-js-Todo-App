import AddList from "@/app/(components)/createTask/CreateTask";
import { ParamsList } from "@/types";
import React from "react";

export default function page({ params }: { params: ParamsList }) {
  return (
    <div>
      <>
        <AddList params={params} />
      </>
    </div>
  );
}
