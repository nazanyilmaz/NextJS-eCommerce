"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import AuthContainer from "../containers/AuthContanier";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface UserProps {
  currentUser: User | null | undefined;
}

const RegisterClient: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(postData);

    axios
      .post("/api/register", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success("New User Created");
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.error) {
            toast.error(callback.error);
          }
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }
        });
      })
      .catch((error) => {
        console.error("Axios error:", error);
        toast.error(error.response?.data?.error || "Registration failed");
      });
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/register");
      router.refresh();
    }
  }, []);

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-2xl rounded-md flex flex-col">
        <Heading text="Register" center />
        <Input
          placeholder="Name"
          type="text"
          id="name"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Email"
          type="text"
          id="email"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
        />
        <Button text="Sign Up" type="submit" onClick={handleSubmit(onSubmit)} />
        <div className="text-xs text-center my-1">
          Do you have an account?
          <Link href="/login" className="text-green-600">
            Sign In
          </Link>
        </div>
        <div className="text-center font-bold my-1 text-lg text-orange-700">
          OR
        </div>
        <Button
          text="Sign Up with Google"
          icon={FcGoogle}
          outline
          onClick={() => signIn("google")}
        />
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
