import { ProfileFormType } from "@/app/interfaces/interface";

const ProfileForm = ({ register, errors, userEmail }: ProfileFormType) => {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-[12px] p-[20px] flex flex-col gap-3">
      <div className="w-full flex flex-col gap-1 md:gap-0 md:flex-row relative">
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
          {...register("firstName")}
        />

        {errors.firstName && (
          <span className="text-red-500 text-xs absolute -bottom-[14px] right-2">
            {errors.firstName?.message}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col gap-1 md:gap-0 md:flex-row relative">
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
          {...register("lastName")}
        />

        {errors.lastName && (
          <span className="text-red-500 text-xs absolute -bottom-[14px] right-2">
            {errors.lastName?.message}
          </span>
        )}
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
          defaultValue={userEmail}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
