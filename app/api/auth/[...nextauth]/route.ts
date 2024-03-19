import { prisma } from "@/prisma/client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),

    CredentialsProvider({
      name: "signup",
      credentials: {},
      async authorize(signup: any) {
        try {
          const { email, password } = signup;
          if (!email || !password) {
            return null;
          }
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          if (!user) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          console.log(passwordMatch);

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("error ", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }: any) {
      if (account.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile.email },
        });
        if (existingUser) {
          console.log("User already exists:", existingUser);
        } else {
          try {
            const newUser = await prisma.user.create({
              data: {
                name: profile.name,
                email: profile.email,
                password: "",
              },
            });
            console.log("User created:", newUser);
          } catch (error) {
            console.log("Error creating user:", error);
          }
        }
      }
      return profile;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
