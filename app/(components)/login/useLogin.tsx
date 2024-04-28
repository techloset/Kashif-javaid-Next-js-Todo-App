import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bademail, setBademail] = useState(false);
  const [badpassword, setBadpassword] = useState(false);

  const router = useRouter();

  // const validate = () => {
  //   let isValid = true;

  //   if (!email) {
  //     setBademail(true);
  //     isValid = false;
  //   } else if (
  //     !email
  //       .toLowerCase()
  //       .match(
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       )
  //   ) {
  //     setBademail(true);
  //     isValid = false;
  //   } else {
  //     return setBademail(false);
  //   }

  //   if (!password) {
  //     setBadpassword(true);
  //     isValid = false;
  //   } else if (password.length < 8) {
  //     setBadpassword(true);
  //     isValid = false;
  //   } else {
  //     return setBadpassword(false);
  //   }

  //   return isValid;
  // };

  const handler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      router.push("/");
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
  };
}
