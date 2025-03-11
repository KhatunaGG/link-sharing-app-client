"use client";
import { axiosInstance } from "@/app/libs/axiosInstance";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const ResendOtp = ({ email }: { email: string }) => {
  const [resending, setResending] = useState(false);

  const handleResend = async () => {
    setResending(true);
    try {
      const res = await axiosInstance.post("/auth/resend-otpCode", { email });
      if (res.status >= 200 && res.status <= 204) {
        toast.success("OTP sent successfully! Please check your email.", {
          position: "top-left",
        });
      }
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        if (e.request) {
          toast.error(
            e.response?.data?.message ||
              "Failed to resend OTP. Please try again.",
            {
              position: "top-left",
            }
          );
        }
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <button
      onClick={handleResend}
      type="button"
      disabled={resending}
      className="text-[#737373] text-sm whitespace-nowrap pt-4 hover:underline hover:text-[#633CFF] transition duration-300 ease-in-out"
    >
      {resending ? "Resending..." : "Resend OTP"}
    </button>
  );
};

export default ResendOtp;
