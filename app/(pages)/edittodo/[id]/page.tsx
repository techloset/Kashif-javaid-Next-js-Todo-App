import EditTodo from "@/app/(components)/editTask/EditTask";
import { ParamsList } from "@/types";
import React from "react";

export default function page({ params }: { params: ParamsList }) {
  return (
    <div>
      <>
        <EditTodo params={params} />
      </>
    </div>
  );
}
