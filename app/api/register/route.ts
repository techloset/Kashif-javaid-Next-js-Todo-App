import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma/client";
export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password, imageUrl } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await prisma.user.create({
      data: { name, email, password: hashedPassword, imageUrl: "" },
    });
    const userId = createdUser.id;

    return NextResponse.json({ message: "success", userId });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const email = req.nextUrl.searchParams.get("email");

    if (email === null) {
      return NextResponse.json({ message: "error" });
    }
    const data = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: { todo: true },
    });

    return NextResponse.json({ message: "success", data });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};
