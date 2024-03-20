"use client";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <h1>Name:{session?.user?.name}</h1>
      <h1>Gmail:{session?.user?.email}</h1>
      <div>Hello, user!</div>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
