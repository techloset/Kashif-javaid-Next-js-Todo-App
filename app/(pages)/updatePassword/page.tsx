import UpdatePassword from "@/app/(components)/updatePassword/[id]/UpdatePassword";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <>
        <UpdatePassword params={params} />
      </>
    </div>
  );
}
