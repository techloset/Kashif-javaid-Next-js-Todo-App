"use client";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <Image
        src={session?.user?.image || ""}
        alt="Profile Image"
        width={40}
        height={40}
      />
      <span>Name{session?.user?.name}</span>

      <br />

      <div>
        <div>Hello, user!</div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  );
}
