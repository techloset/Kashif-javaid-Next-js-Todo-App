// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/prisma/client";

// export const POST = async (request: NextRequest) => {
//   try {
//     const { imageUrl } = await request.json(); // Yahaan sirf image URL aa rahi hai

//     // User ke ID ko request object se nikalo
//     const userId = request.headers.get("user-id");
//     console.log(userId);

//     if (!userId) {
//       throw new Error("User ID not provided");
//     }

//     // User ka data update karo, including the new imageUrl
//     await prisma.user.update({
//       where: {
//         id: userId,
//       },
//       data: {
//         imageUrl: imageUrl,
//       },
//     });

//     return NextResponse.json({ message: "success" });
//   } catch (error) {
//     return NextResponse.json({ message: "error" });
//   }
// };

// export const PUT = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const { id } = params;
//     const { imageUrl } = await req.json();
//     const data = await prisma.profile.update({
//       where: {
//         id: id,
//       },
//       data: {
//         imageUrl: imageUrl,
//       },
//     });
//     return NextResponse.json({ data });
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// };

// export const GET = async (
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const { id } = params;
//     const imageUrl = await prisma.profile.findUnique({
//       where: {
//         id: id,
//       },
//     });
//     return NextResponse.json({ imageUrl });
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// };
