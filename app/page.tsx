"use client";
import { signOut, useSession, signIn } from "next-auth/react";
import ListImage from "../public/Lists.png";
export default function Home() {
  const { status } = useSession();

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ListImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <div>
            {status === "authenticated" ? (
              <div>
                <div>Hello, user!</div>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            ) : (
              <div>
                <button onClick={() => signIn()}>Sign In </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
