"use client";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Image from "next/image";

export type SignInPasswordPropsType = {
  register: UseFormRegister<{
    email: string;
    password: string;
  }>;
  errors: FieldErrors<{
    email: string;
    password: string;
  }>;
};

const PasswordInput: FC<SignInPasswordPropsType> = ({ register, errors }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor=""
          className="EMAIL text-xs leading-[18px] text-[#333333] font-normal"
        >
          Create password{" "}
        </label>
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Enter your password"
            className="w-full border border-[#D9D9D9] rounded-lg  py-[12px] pl-[45.5px] text-base font-normal leading-[24px] outline-none"
            {...register("password")}
            id="password"
          />
          <div className="w-[16px] h-[16px] absolute top-1/2 left-[17.5px] transform -translate-y-1/2">
            <Image
              src={"/assets/icons/icon-password.svg"}
              alt={"email"}
              //   width={13}
              //   height={10}
              fill
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs absolute -bottom-4 left-0">
              {errors.password?.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
