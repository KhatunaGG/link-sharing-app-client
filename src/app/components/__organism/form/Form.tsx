"use client";
import EmailInput from "../emailInput/EmailInput";
import PasswordInput from "../passwordInput/PasswordInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

export const passwordSchema = z
  .string()
  .min(4, "Password must be at least 4 characters")
  .max(11, "Password must be no more than 11 characters");

export const confirmPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z
      .string()
      .min(4, "Confirm password must be at least 4 characters")
      .nonempty("Confirm password is required"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords don't match",
      });
    }
  });

export const signUpSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email format"),
  })
  .and(confirmPasswordSchema);

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type FormPropsType = {
  setOtpCodeModal: Dispatch<SetStateAction<boolean>>;
  otpCodeModal: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
};

const Form = ({ setOtpCodeModal, setEmail }: FormPropsType) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (formState: SignUpFormData) => {
    setEmail(formState.email);
    try {
      const newFormState = {
        email: formState.email,
        password: formState.password,
      };
      const res = await axiosInstance.post("/auth/sign-up", newFormState);

      if (res.status >= 200 && res.status <= 204) {
        reset();
        setOtpCodeModal(true);
      }
    } catch (e) {
      console.log(e, "eeeeeeeeeeee");
      if (axios.isAxiosError(e)) {
        toast.error(e.response?.data?.message || "An error occurred", {
          position: "top-left",
        });
      }
    }
  };

  return (
    <form
      onClick={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      <EmailInput
        register={register}
        errors={errors}
        touchedFields={touchedFields}
      />
      <PasswordInput
        register={register}
        errors={errors}
        touchedFields={touchedFields}
      />

      <p className="text-[#737373] font-normal  text-xs leading-[18px]">
        Password must contains at least 4 characters
      </p>
      <button
        type="submit"
        className="w-full bg-[#633CFF] rounded-lg py-[11px] text-white text-base leading-[24px] font-semibold hover:bg-[#BEADFF] transition duration-300 ease-in-out"
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
