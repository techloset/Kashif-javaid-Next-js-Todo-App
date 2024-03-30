import { prisma } from "@/prisma/client";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.formData();
    const file = await data.get("file");

    if (!file) {
      return NextResponse.json({ message: "No file found" });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const fileName = file.name; // Retrieve the name of the file

    const createdProfile = await prisma.profile.createMany({
      data: { file: fileName },
    });

    await writeFile(`uploads/${fileName}`, buffer);

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "error" });
  }
};
