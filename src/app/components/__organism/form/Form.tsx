"use client";
// import Image from "next/image";
import EmailInput from "../emailInput/EmailInput";
import PasswordInput from "../passwordInput/PasswordInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export const passwordSchema = z
  .string()
  .min(4, "At least 4 characters")
  .max(11, "No more than 11 characters");

export const confirmPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "No matches",
      });
    }
  });

export const signUpSchema = z
  .object({
    email: z.string().email(),
  })
  .and(confirmPasswordSchema);

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type FormPropsType = {
  setOtpCodeModal: Dispatch<SetStateAction<boolean>>;
  otpCodeModal: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
};

const Form = ({ setOtpCodeModal, otpCodeModal, setEmail }: FormPropsType) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  console.log(errors)

  const onSubmit = async (formState: SignUpFormData) => {
    console.log(formState, "formState");
    setEmail(formState.email);
    try {
      const newFormState = {
        email: formState.email,
        password: formState.password,
      };
      const res = await axiosInstance.post("/auth/sign-up", newFormState);

      if (res.status >= 200 && res.status <= 204) {
        reset();
        setOtpCodeModal(!otpCodeModal);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onClick={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      {/* {otpCodeModal && <OtpCodeModal />} */}
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />

      <p className="text-[#737373] font-normal  text-xs leading-[18px]">
        Password must contains at least 4 characters
      </p>
      <button
        type="submit"
        className="w-full bg-[#633CFF] rounded-lg py-[11px] text-white text-base leading-[24px] font-semibold hover:bg-[#633CFF]/50 transition duration-300 ease-in-out"
      >
        Create new account
      </button>
      <div className="w-full  text-base leading-[24px] font-normal text-center md:flex md:flex-row md:items-center md:justify-center md:gap-2">
        <p className="text-[#737373] ">Already have an account? </p>
        <Link href={"/signIn"}>
          <p className="text-[#633CFF] cursor-pointer">Login</p>
        </Link>
      </div>
    </form>
  );
};

export default Form;
