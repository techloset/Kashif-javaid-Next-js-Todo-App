import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ message: "No file selected", status: 400 });
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Extract filename (assuming the file object has a `name` property)
    const filename = file.name;

    await prisma.profile.create({
      data: {
        image: buffer, // Pass the buffer directly
        filename: filename, // Add filename as a separate property
      },
    });

    return NextResponse.json({ message: "success", status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error occurred while processing the request",
      status: 500,
    });
  }
};
