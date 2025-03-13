import { FC } from "react";
import Image from "next/image";
import { SignInInputPropsType } from "@/app/interfaces/interface";

const SignInInput: FC<SignInInputPropsType> = ({ register, errors }) => {
  return (
    <div className="w-full flex flex-col gap-1 relative">
      <label
        htmlFor="email"
        className="EMAIL text-xs leading-[18px] text-[#333333] font-normal"
      >
        Email address
      </label>
      <div className="w-full relative">
        <input
          id="email"
          type="text"
          placeholder="e.g. alex@email.com"
          className={`w-full border border-[#D9D9D9] rounded-lg py-[12px] pl-[45.5px] text-base font-normal leading-[24px] outline-none
            ${errors.email ? "border-[#FF3939]" : "border-[#D9D9D9]"} 
            focus:outline-none 
            ${
              errors.email
                ? ""
                : "focus:border-[#633CFF] focus:shadow-[0px_0px_10px_#BEADFF]"
            }`}
          {...register("email")}
        />
        <div className="w-[16px] h-[16px] absolute top-1/2 left-[17.5px] transform -translate-y-1/2">
          <Image src={"/assets/icons/icon-email.svg"} alt={"email"} fill />
        </div>
      </div>
      {errors.email && (
        <span className="text-[#FF3939]  text-xs absolute -bottom-4 left-0">
          {errors.email?.message}
        </span>
      )}
    </div>
  );
};

export default SignInInput;
