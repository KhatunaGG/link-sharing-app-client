import { FC } from "react";
import Image from "next/image";
import { PasswordInputProps } from "@/app/interfaces/interface";

const PasswordInput: FC<PasswordInputProps> = ({
  register,
  errors,
  touchedFields,
}) => {
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
            <Image src={"/assets/icons/icon-password.svg"} alt={"email"} fill />
          </div>
          {touchedFields.password && errors.password && (
            <span className="text-red-500 text-xs absolute -bottom-4 left-0">
              {errors.password?.message}
            </span>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor=""
          className="EMAIL text-xs leading-[18px] text-[#333333] font-normal"
        >
          Confirm password{" "}
        </label>
        <div className="w-full relative">
          <input
            type="text"
            placeholder="At least 4 characters"
            className="w-full border border-[#D9D9D9] rounded-lg  py-[12px] pl-[45.5px] text-base font-normal leading-[24px] outline-none"
            {...register("confirmPassword")}
            id="confirmPassword"
          />
          <div className="w-[16px] h-[16px] absolute top-1/2 left-[17.5px] transform -translate-y-1/2">
            <Image src={"/assets/icons/icon-password.svg"} alt={"email"} fill />
          </div>
          {touchedFields.confirmPassword && errors.confirmPassword && (
            <span className="text-red-500 text-xs absolute -bottom-4 left-0">
              {errors.confirmPassword?.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
