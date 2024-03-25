import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { title } = await request.json();
    await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title,
      },
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const GET = async (
  requestL: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const title = await prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ title });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
