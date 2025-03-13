"use client";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ResendOtp from "../resendOtp/ResendOtp";
import {
  OtpCodeModalPropsType,
  OtpFormStateType,
} from "@/app/interfaces/interface";
import { otpSchema } from "@/app/schema/otp-schema";
import axios from "axios";
import { toast } from "react-toastify";

const OtpCodeModal = ({ setOtpCodeModal, email }: OtpCodeModalPropsType) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpCodeState, setOtpCodeState] = useState<string>("");
  const router = useRouter();

  const { register, handleSubmit, setValue, reset } = useForm<OtpFormStateType>(
    {
      resolver: zodResolver(otpSchema),
      defaultValues: {
        otpCode: "",
      },
    }
  );

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
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "An error occurred";
        toast.error(message, {
          position: "top-left",
        });
      }
    }
  };

  return (
    <section className="bg-white w-full h-full absolute inset-0 z-10 flex flex-col items-center justify-center p-2 rounded-lg shadow-[0px_0px_10px_#BEADFF]">
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
                    className="shadow-xs flex w-10 h-10 items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-sm font-medium text-[#633CFF] outline-none focus:shadow-[0px_0px_10px_#BEADFF]"
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
          <ResendOtp email={email} />
        </div>
      </div>
    </section>
  );
};

export default OtpCodeModal;
