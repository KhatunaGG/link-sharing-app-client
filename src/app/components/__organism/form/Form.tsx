"use client";
import EmailInput from "../emailInput/EmailInput";
import PasswordInput from "../passwordInput/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/app/libs/axiosInstance";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { signUpSchema } from "@/app/schema/form-schema";
import { FormPropsType, SignUpFormData } from "@/app/interfaces/interface";

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
