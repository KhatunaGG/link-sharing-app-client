"use client";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type OtpCodeModalPropsType = {
  setOtpCode: Dispatch<SetStateAction<string>>;
  setOtpCodeModal: Dispatch<SetStateAction<boolean>>;
  email: string;
};

export const otpSchema = z.object({
  otpCode: z
    .string()
    .length(6, "OTP must be exactly 6 characters")
    .regex(/^\d{6}$/, "OTP must be numeric"),
});

export type OtpFormStateType = z.infer<typeof otpSchema>;

const OtpCodeModal = ({
  // setOtpCode,
  setOtpCodeModal,
  email,
}: OtpCodeModalPropsType) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const [otpCodeState, setOtpCodeState] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<OtpFormStateType>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otpCode: "",
    },
  });
  console.log(errors)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const newOtpCode = otpCodeState.split("");
    newOtpCode[index] = value;
    const newOtpString = newOtpCode.join("");

    setOtpCodeState(newOtpString);
    setValue("otpCode", newOtpString);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const onSubmit = async (formState: OtpFormStateType) => {
    try {
      const newState = {
        email,
        otpCode: formState.otpCode,
      };
      const res = await axiosInstance.post("/auth/verify", newState);
      if (res.status >= 200 && res.status <= 204) {
        router.push("/signIn");
        setOtpCodeModal(false);
        reset();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="bg-white w-full h-full absolute inset-0 z-10 flex flex-col items-center justify-center p-2 rounded-lg shadow-xl">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="mb-1.5 text-sm font-medium text-dark text-center text-[#737373]">
            One-Time Password
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="otp-form"
            className="flex items-center justify-center flex-col gap-2"
          >
            <div className="flex items-center justify-center gap-1">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <input
                    {...register("otpCode")}
                    key={index}
                    type="text"
                    className="shadow-xs flex w-10 h-10 items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-sm font-medium text-[#633CFF] outline-none"
                    maxLength={1}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    onFocus={handleFocus}
                    onChange={(e) => handleChange(e, index)}
                  />
                ))}
            </div>
            <p className="mt-1.5 text-sm text-body-color text-center text-[#737373]">
              Please enter the one-time password sent to your email.
            </p>
            <button
              type="submit"
              className="bg-[#633CFF] px-6 py-2 rounded-lg text-white font-bold hover:bg-[#633CFF]/50 transition duration-300 ease-in-out"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OtpCodeModal;
