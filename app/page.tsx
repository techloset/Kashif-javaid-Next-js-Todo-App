import React from "react";
import Home from "./(components)/home/Home";
export default function Page() {
  return (
    <>
      <div>
        <div className="bg-black bg-[radial-gradient(#818181_1px,transparent_6px)] [background-size:16px_16px opacity-100 ">
          <div>
            <div className="bg-black bg-[radial-gradient(#F9F5EB_1px,transparent_4px)] [background-size:16px_16px] opacity-100">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
