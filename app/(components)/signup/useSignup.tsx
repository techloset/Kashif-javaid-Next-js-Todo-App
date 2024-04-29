import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SignUp } from "@/app/store/slices/authSlice/registerSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import toast from "react-hot-toast";

export default function useSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [badusername, setBadusername] = useState(false);
  const [bademail, setBademail] = useState(false);
  const [badpassword, setBadpassword] = useState(false);
  const [badconfirmpass, setBadconfirmpass] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.user);

  const validate = () => {
    let isValid = true;

    if (!name) {
      setBadusername(true);
      toast.error("Name is required");
      isValid = false;
      return isValid;
    }

    if (!email) {
      setBademail(true);
      toast.error("Email is required");
      isValid = false;
      return isValid;
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setBademail(true);
      toast.error("Email is invalid");
      isValid = false;
      return isValid;
    }

    if (!password) {
      setBadpassword(true);
      toast.error("Password is required");
      isValid = false;
      return isValid;
    } else if (password.length < 8) {
      setBadpassword(true);
      toast.error("Password must be at least 8 characters");
      isValid = false;
      return isValid;
    }

    if (!confirmpassword) {
      setBadconfirmpass(true);
      toast.error("Confirm Password is required");
      isValid = false;
      return isValid;
    } else if (confirmpassword !== password) {
      setBadconfirmpass(true);
      toast.error("Passwords do not match");
      isValid = false;
      return isValid;
    }

    return isValid;
  };

  const formHandle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!validate()) {
        return;
      }
      if (!name || !email || !password || !confirmpassword) {
        toast.error("Please fill in all fields");
        return;
      }

      const response = await dispatch(SignUp({ name, email, password }));
      const exists = response;

      if (!exists) {
        toast.error("User already exists");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        router.push("/login");
      } else {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        router.push("/login");
      }
    } catch (error) {
      toast.error("Error registering");
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmpassword,
    setConfirmPassword,
    formHandle,
    badusername,
    badpassword,
    bademail,
  };
}
