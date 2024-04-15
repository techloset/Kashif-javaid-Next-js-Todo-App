import { prisma } from "@/prisma/client";

import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { imageUrl } = await request.json();
    const image = await prisma.profile.create({
      data: {
        imageUrl: imageUrl,
      },
    });

    return NextResponse.json({ message: "success", image });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "error" });
  }
};
