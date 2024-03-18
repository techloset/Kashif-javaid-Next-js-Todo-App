import { prisma } from "@/prisma/client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import axios from "axios";
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
    async signIn({ user, account }: any) {
      console.log(user);
      if (account?.provider === "google") {
        try {
          const { name, email } = await user;
          const res = await axios.post("api/google", {
            name,
            email,
          });
          if (res) {
            return user;
          }
        } catch (error) {
          console.log("error", error);
        }
      }

      return user;
    },
  },

  session: {
    strategy: "jwt",
  },

  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
