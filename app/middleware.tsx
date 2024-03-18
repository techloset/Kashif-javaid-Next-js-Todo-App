import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    secret: process.env.NextAuth_SECRET,
  }
);

export const config = { matcher: ["/"] };
