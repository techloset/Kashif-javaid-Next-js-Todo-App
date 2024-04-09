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
    console.log(userId);

    return NextResponse.json({ message: "success", userId });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const { userId, imageUrl } = await req.json();
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user) {
      await prisma.user.update({
        where: { id: userId },
        data: { imageUrl: imageUrl },
      });
      return NextResponse.json({ message: "success" });
    } else {
      return NextResponse.json({ message: "User not found" });
    }
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};
