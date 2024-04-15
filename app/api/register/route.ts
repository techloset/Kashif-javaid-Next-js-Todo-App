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

export const GET = async () => {
  try {
    const data = await prisma.user.findMany();
    return NextResponse.json({ message: "success", data });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const { userId, imageUrl } = await request.json();

    console.log(userId);
    console.log(imageUrl);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        imageUrl,
      },
    });

    console.log(updatedUser);

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error, "Error updating");

    return NextResponse.json({ message: "error" });
  }
};
