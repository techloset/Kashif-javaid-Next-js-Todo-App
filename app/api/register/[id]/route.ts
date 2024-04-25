import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { imageUrl, name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        imageUrl,
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

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
