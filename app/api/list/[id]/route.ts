import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await prisma.list.findMany();
    return NextResponse.json({ result: res });
  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { title } = await request.json();
    await prisma.list.update({
      where: {
        id: id,
      },
      data: {
        title: title,
      },
    });
    return NextResponse.json({ result: "success" });
  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
};
