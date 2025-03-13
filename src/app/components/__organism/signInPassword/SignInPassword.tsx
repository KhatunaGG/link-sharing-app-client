import { FC } from "react";
import Image from "next/image";
import { SignInPasswordPropsType } from "@/app/interfaces/interface";

const SignInPassword: FC<SignInPasswordPropsType> = ({ register, errors }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label
        htmlFor="password"
        className="EMAIL text-xs leading-[18px] text-[#333333] font-normal"
      >
        Create password
      </label>
      <div className="w-full relative">
        <input
          type="password"
          placeholder="Enter your password"
          className={`w-full border border-[#D9D9D9] rounded-lg py-[12px] pl-[45.5px] text-base font-normal leading-[24px] outline-none
            ${errors.password ? "border-[#FF3939]" : "border-[#D9D9D9]"}
             focus:outline-none 
             ${
               errors.email
                 ? ""
                 : "focus:border-[#633CFF] focus:shadow-[0px_0px_10px_#BEADFF]"
             }`}
          {...register("password")}
          id="password"
        />
        <div className="w-[16px] h-[16px] absolute top-1/2 left-[17.5px] transform -translate-y-1/2">
          <Image
            src={"/assets/icons/icon-password.svg"}
            alt={"password"}
            fill
          />
        </div>
        {errors.password && (
          <span className="text-red-500 text-xs absolute -bottom-4 left-0">
            {errors.password?.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default SignInPassword;
