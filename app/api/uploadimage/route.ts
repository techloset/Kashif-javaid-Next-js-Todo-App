import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { imageUrl } = await request.json();
    const data = await prisma.profile.create({ data: { imageUrl } });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { imageUrl } = await req.json();
    const data = await prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        imageUrl: imageUrl,
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const imageUrl = await prisma.profile.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ imageUrl });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
