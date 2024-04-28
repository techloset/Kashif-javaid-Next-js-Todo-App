import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { password } = await request.json();
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { password },
    });

    return NextResponse.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating password", error },
      { status: 500 }
    );
  }
};
