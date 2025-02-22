"use client";
import Link from "next/link";
import React, { useState } from "react";
import SignInInput from "../signInInput/SignInInput";
import SignInPassword from "../signInPassword/SignInPassword";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, "At least 4 characters")
    .max(11, "No more than 11 characters"),
});

export type SignInFormData = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const [accessToken, setAccessToken] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (formState: SignInFormData) => {
    console.log(formState, "formState");
    try {
      const res = await axiosInstance.post("/auth/sign-in", formState, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      //   if (res.status >= 200 && res.status <= 204) {
      //     router.push("/dashboard");
      //     reset();
      //   }

      if (res.status >= 200 && res.status <= 204) {
        const token = res.data.accessToken;
        setAccessToken(token);
        setCookie("accessToken", token, { maxAge: 60 * 60 });
        if (token) {
          router.push("/dashboard");
        }
        reset();
      }
    } catch (e) {
      console.log(e);
    }
  };
  if (!accessToken) return null;

  return (
    <form
      onClick={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      <SignInInput register={register} errors={errors} />
      <SignInPassword register={register} errors={errors} />

      <p className="text-[#737373] font-normal  text-xs leading-[18px]">
        Password must contains at least 4 characters
      </p>
      <button
        type="submit"
        className="w-full bg-[#633CFF] rounded-lg py-[11px] text-white text-base leading-[24px] font-semibold hover:bg-[#633CFF]/50 transition duration-300 ease-in-out"
      >
        Login
      </button>
      <div className="w-full  text-base leading-[24px] font-normal text-center md:flex md:flex-row md:items-center md:justify-center md:gap-2">
        <p className="text-[#737373] ">Don’t have an account?</p>
        <Link href={"/"}>
          <p className="text-[#633CFF] cursor-pointer">Create account</p>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
