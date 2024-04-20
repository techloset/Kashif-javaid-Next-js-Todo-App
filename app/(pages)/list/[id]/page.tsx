import AddList from "@/app/(components)/addList/AddList";
import React from "react";

export default function page({
  params,
}: {
  params: { id: string; title: string; todoId: string };
}) {
  return (
    <div>
      <>
        <AddList params={params} />
      </>
    </div>
  );
}
