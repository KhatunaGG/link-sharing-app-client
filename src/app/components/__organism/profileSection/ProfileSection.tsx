// import Image from "next/image";

import { ImageIcon } from "../../__atoms";
import ProfileForm from "../profileForm/ProfileForm";

const ProfileSection = () => {
  return (
    <form className="w-full">
      <div className=" w-full h-full flex flex-col gap-10 px-6 pt-6 md:px-10 md:pt-10 md:pb-[154px] lf:pb-[114px]">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="text-[#333333] font-bold text-[32px] leading-[48px]">
            Profile Details
          </h1>
          <p className="text-base font-normal leading-[24px] text-[#737373]">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="w-full bg-[#FAFAFA] rounded-[12px] p-[20px] flex flex-col gap-4 md:gap-0 md:flex-row">
            <p className="text-base font-normal leading-[24px] text-[#737373] md:w-[42.66%] flex items-center justify-start">
              Profile picture
            </p>

            <div className="w-full md:w-[57.33%] lg:w-[62.79%] flex flex-col md:flex-row gap-[24px]">
              <div className="rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center">
                {/* <div className="flex flex-col items-center gap-2 justify-center cursor-pointer">
                  <ImageIcon />
                  <p className="text-base font-semibold leading-[24px] text-[#633CFF]">
                    + Upload Image
                  </p>
                </div> */}



                <div className="flex flex-col items-center gap-2 justify-center cursor-pointer group">
                  <ImageIcon />
                  <p className="text-base font-semibold leading-[24px] text-[#633CFF] hover:text-[#737373] transition duration-300 ease-in-out">
                    + Upload Image
                  </p>
                </div>





              </div>
              <p className="text-xs leading-[18px] lg:text-base font-normal lg:leading-[24px] text-[#737373] md:w-[36.91%] lg:w-[49.77%] flex items-center justify-start">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </div>

          <ProfileForm />
        </div>
      </div>

      <div className="w-full absolute bottom-0 overflow-hidden bg-white z-20">
        <div className="w-full h-[1px] bg-[#efecec]" />
        <div className="w-full  flex items-center justify-end px-4 md:px-10 py-6 ">
          <button
            type="submit"
            className="text-white w-full py-[11px] font-semibold bg-[#633CFF] flex items-center justify-center rounded-[8px] hover:bg-[#BEADFF] transition duration-300 ease-in-out md:w-max md:px-[27px] "
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileSection;
