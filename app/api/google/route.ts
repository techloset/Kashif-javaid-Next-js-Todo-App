import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();
    await prisma.user.create({ data: { name, email, password: "" } });
    return NextResponse.json({ alert: "success Registration" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "error occurred" });
  }
};
