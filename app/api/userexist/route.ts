import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: NextRequest) => {
  try {
    const { email } = await request.json();
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    return NextResponse.json({ existingUser });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
