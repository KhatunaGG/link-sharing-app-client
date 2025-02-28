"use client";
import Image from "next/image";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LinkItemType } from "../../__organism/links/Links";
import { FC } from "react";

export type InputPropsType = {
  register?: UseFormRegister<LinkItemType>;
  errors?: FieldErrors<LinkItemType>;
  link?: string;
};

const Input: FC<InputPropsType> = ({ register, errors, link }) => {
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
          className={`${
            errors?.link ? "border border-[#FF3939]" : ""
          } w-full text-[#333333] text-base font-normal leading-[18px] py-3 pl-10 rounded-[8px] outline-none `}
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
          className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 "
        />
      </div>
    </div>
  );
};

export default Input;
