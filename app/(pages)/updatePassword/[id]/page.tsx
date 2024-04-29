import UpdatePassword from "@/app/(components)/updatePassword/[id]/UpdatePassword";
import { paramsId } from "@/types";
import React from "react";

export default function page({ params }: { params: paramsId }) {
  return (
    <div>
      <>
        <div>
          <div className="bg-black bg-[radial-gradient(#818181_1px,transparent_6px)] [background-size:16px_16px ">
            <div>
              <div className="bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px]">
                <UpdatePassword params={params} />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
