import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { title, todoId } = await request.json();
    await prisma.list.create({
      data: { title, todoId },
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const id = await request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "Invalid", status: 400 });
    }
    await prisma.list.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
