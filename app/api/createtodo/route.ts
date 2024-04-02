import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { title, color } = await request.json();
    const data = await prisma.todo.create({ data: { title, color } });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const GET = async () => {
  try {
    const response = await prisma.todo.findMany();
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const id = await request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "Invalid", status: 400 });
    }
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
