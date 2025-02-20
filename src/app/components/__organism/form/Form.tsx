"use client"
import Image from "next/image";

const Form = () => {
  return (
    <form className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor=""
          className="EMAIL text-xs leading-[18px] text-[#333333] font-normal"
        >
          Email address{" "}
        </label>
        <div className="w-full relative">
          <input
            type="text"
            placeholder="e.g. alex@email.com"
            className="w-full border border-[#D9D9D9] rounded-lg  py-[12px] pl-[45.5px] text-base font-normal leading-[24px]"
          />
          <div className="w-[16px] h-[16px] absolute top-1/2 left-[17.5px] transform -translate-y-1/2">
            <Image
              src={"/assets/icons/icon-email.svg"}
              alt={"email"}
              //   width={13}
              //   height={10}
              fill
            />
          </div>
        </div>
      </div>

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
            className="w-full border border-[#D9D9D9] rounded-lg  py-[12px] pl-[45.5px] text-base font-normal leading-[24px]"
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
            placeholder="At least .8 characters"
            className="w-full border border-[#D9D9D9] rounded-lg  py-[12px] pl-[45.5px] text-base font-normal leading-[24px]"
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
        </div>
      </div>


      <p className="text-[#737373] font-normal  text-xs leading-[18px]">
        Password must contains at least 8 characters
      </p>
      <button
        type="submit"
        className="w-full bg-[#633CFF] rounded-lg py-[11px] text-white text-base leading-[24px] font-semibold"
      >
        Create new account
      </button>
      <div className="w-full  text-base leading-[24px] font-normal text-center md:flex md:flex-row md:items-center md:justify-center md:gap-2">
        <p className="text-[#737373] ">Already have an account? </p>
        <p className="text-[#633CFF] cursor-pointer">Login</p>
      </div>
    </form>
  );
};

export default Form;
