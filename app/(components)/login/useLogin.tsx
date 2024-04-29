import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bademail, setBademail] = useState(false);
  const [badpassword, setBadpassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      router.push("/");
      setLoading(false);
    } catch (error) {}

    if (bademail) {
      toast.error("Email is required");
      return;
    }
    if (badpassword) {
      toast.error("Password is required");
      return;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handler,
    bademail,
    badpassword,
    setBadpassword,
    setBademail,
    loading,
  };
}
