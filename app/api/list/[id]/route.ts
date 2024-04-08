import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await prisma.list.findMany();
    return NextResponse.json({ result: res });
  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
};
