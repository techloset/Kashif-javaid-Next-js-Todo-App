import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { imageUrl, name } = await request.json();

    const data = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        imageUrl,
        name,
      },
    });
    console.log(data);

    return NextResponse.json({ message: "success", data });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const imageUrl = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ imageUrl });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
