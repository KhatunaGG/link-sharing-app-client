"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { InputPropsType } from "@/app/interfaces/interface";



const Input: FC<InputPropsType> = ({ register, errors, link, isCreating }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full">
      <label
        htmlFor="link"
        className="text-[#333333] text-xs font-normal leading-[18px]"
      >
        Link
      </label>

      <div className="w-full relative">
        <input
          {...register?.("link")}
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${
            errors?.link ? "border border-[#FF3939]" : ""
          } w-full text-base font-normal leading-[18px] py-3 pl-10 rounded-[8px] outline-none  text-[#633CFF] ${
            isCreating || isFocused
              ? "border-[#633CFF] shadow-[0px_0px_10px_#BEADFF]"
              : "text-[#633CFF] "
          }`}
          defaultValue={link || ""}
        />
        {errors?.link && (
          <span className="text-[#FF3939] text-sm absolute -bottom-5 left-0">
            {errors.link.message}
          </span>
        )}
        <Image
          src={"/assets/icons/icon-link.svg"}
          alt={"logo"}
          width={16}
          height={16}
          sizes="(max-width: 768px) 16px, 16px"
          className="absolute top-1/2 left-4  transform -translate-y-1/2 "
        />
      </div>
    </div>
  );
};

export default Input;
