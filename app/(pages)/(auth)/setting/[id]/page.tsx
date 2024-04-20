import Setting from "@/app/(components)/setting/Setting";

import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return <Setting params={params} />;
}
