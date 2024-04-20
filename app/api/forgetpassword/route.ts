import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const POST = async (req: NextRequest) => {
  try {
    const { email } = await req.json();
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Email does not exist" },
        { status: 400 }
      );
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const passwordResetExpires = Date.now() + 3600000;

    existingUser.resetToken = passwordResetToken;
    existingUser.resetTokenExpires = new Date(passwordResetExpires);

    const resetUrl = `http://localhost:3000/changePassword/${resetToken}`;
    console.log(resetUrl);

    return NextResponse.json({ message: "Reset token generated successfully" });
  } catch (error) {
    console.error("Error generating reset token:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
