import EditTodo from "@/app/(components)/edittodo/EditTodo";
import React from "react";

export default function page({
  params,
}: {
  params: { id: string; title: string };
}) {
  return (
    <div>
      <>
        <EditTodo params={params} />
      </>
    </div>
  );
}
