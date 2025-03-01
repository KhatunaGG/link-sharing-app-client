import React from "react";

const ProfileForm = () => {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-[12px] p-[20px] flex flex-col gap-3">
      <div className="w-full flex flex-col gap-1 md:gap-0 md:flex-row ">
        <label
          htmlFor=""
          className="text-[#737373] text-xs leading-[18px] font-normal md:text-base md:leading-[24px] md:w-[42.66%] lg:w[37.20%] flex items-center justify-start"
        >
          First name*
        </label>
        <input
          type="text"
          placeholder="e.g. John"
          className="text-xs leading-[18px] font-normal md:text-base md:leading-[24px] md:w-[57.33%] lg:w-[62.79%] px-4 py-3 outline-none border border-[#e9e5e5] rounded-[8px]"
        />
      </div>

      <div className="w-full flex flex-col gap-1 md:gap-0 md:flex-row ">
        <label
          htmlFor=""
          className="text-[#737373] text-xs leading-[18px] font-normal md:text-base md:leading-[24px] md:w-[42.66%] lg:w[37.20%] flex items-center justify-start"
        >
          Last Name*
        </label>
        <input
          type="text"
          placeholder="e.g. Travolta"
          className="text-xs leading-[18px] font-normal md:text-base md:leading-[24px] md:w-[57.33%] lg:w-[62.79%] px-4 py-3 outline-none border border-[#e9e5e5] rounded-[8px]"
        />
      </div>

      <div className="w-full flex flex-col gap-1 md:gap-0 md:flex-row ">
        <label
          htmlFor=""
          className="text-[#737373] text-xs leading-[18px] font-normal md:text-base md:leading-[24px] md:w-[42.66%] lg:w[37.20%] flex items-center justify-start"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="e.g. email@example.com"
          className="text-xs leading-[18px] font-normal md:text-base md:leading-[24px] md:w-[57.33%] lg:w-[62.79%] px-4 py-3 outline-none border border-[#e9e5e5] rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default ProfileForm;
