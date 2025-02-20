"use client";
import { Logo } from "../../__molecules";
import Form from "../form/Form";

const SignIpSection = () => {
  return (
    <section className=" rounded-xl w-[82.93%] md:w-[61.87%] lg:w-[33.05%] ">
      <Logo />
      <div className="bg-white w-full md:p-10 flex flex-col gap-10 rounded-lg">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-[32px] leading-[1.5] text-[#333333]">
            Create account
          </h1>
          <p className="text-base text-[#737373] font-normal leading-[24px]">
            Let’s get you started sharing your links!
          </p>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default SignIpSection;
