import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { title, color, textColor, borderColor, email } =
      await request.json();
    const data = await prisma.todo.create({
      data: { title, color, textColor, borderColor, userEmail: email },
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const GET = async () => {
  try {
    const response = await prisma.todo.findMany({
      include: {
        user: true,
      },
    });

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
