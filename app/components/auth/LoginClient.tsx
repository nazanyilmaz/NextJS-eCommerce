"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import AuthContainer from "../containers/AuthContanier";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface UserProps {
  currentUser: User | null | undefined;
}

const LoginClient: React.FC<UserProps> = ({ currentUser }) => {
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
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged In");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
      router.refresh();
    }
  }, []);

  return (
    <AuthContainer>
      <div className=" w-full md:w-[500px] p-3 shadow-2xl rounded-md flex flex-col ">
        <Heading text="Login" center />
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
        <Button text="Sign In" type="submit" onClick={handleSubmit(onSubmit)} />
        <div className="text-xs text-center my-1">
          Don't have an account?{" "}
          <Link href="/register" className="text-green-600">
            Sign Up
          </Link>
        </div>
        <div className=" text-center font-bold my-1 text-lg text-orange-700">
          OR
        </div>
        <Button
          text="Sign In with Google"
          icon={FcGoogle}
          outline
          onClick={() => signIn("google")}
        />
      </div>
    </AuthContainer>
  );
};

export default LoginClient;
