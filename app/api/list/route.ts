import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { userId, title } = await request.json();
    await prisma.list.create({ data: { userId, title } });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" });
  }
};
