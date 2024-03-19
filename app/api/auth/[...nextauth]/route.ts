import { prisma } from "@/prisma/client";
import { AuthOptions, User } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
export const authOptions: AuthOptions = {
  secret: process.env.NextAuth_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),

    CredentialsProvider({
      name: "Sign",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordMatch) {
          return null;
        }
        return user;
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
    signIn: "/home",
    error: "/auth/error",
  },

  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
