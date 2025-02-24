"use client";
import { platformData } from "@/app/commons/data";
import Image from "next/image";

const Select = () => {
  const getIconName = (platform: string): string => {
    const iconMap: { [key: string]: string } = {
      "Dev.to": "devto",
      "Frontend Mentor": "frontendmentor",
      "Stack Overflow": "stackoverflow",
    };
    return iconMap[platform] || platform.toLowerCase();
  };

  return (
    <div className="w-full">
      <label
        htmlFor="platform"
        className="text-[#333333] text-xs font-normal leading-[18px]"
      >
        Platform
      </label>

      <div className="w-full relative">
        <input
          type="text"
          className="w-full text-[#333333] text-base font-normal leading-[18px] py-3 pl-4 rounded-[8px] outline-none "
          placeholder="Select Platform..."
        />

        <button className="px-4 py-2 flex items-center justify-center absolute right-0 top-0 z-10 transform translate-y-1/2">
          <div className="w-[12px] h-[6px] flex items-center justify-center relative">
            <Image
              src={"/assets/icons/icon-chevron-down.svg"}
              alt={"logo"}
              fill
            />
          </div>
        </button>

        <div className="hidden w-full absolute left-0 right-0 z-10 top-[52px] bg-white  px-4 rounded-[8px] shadow-xl max-h-[200px] overflow-y-scroll">
          {Object.values(platformData).map((platform, i, arr) => {
            const isLastItem = i === arr.length - 1;
            const iconName = getIconName(platform);

            return (
              <div
                key={i}
                className={`w-full flex items-center gap-3 py-3 ${
                  !isLastItem ? "border-b border-b-[#D9D9D9]" : ""
                } cursor-pointer`}
              >
                <Image
                  src={`/assets/icons/select-icons/icon-${iconName}.svg`}
                  alt={`${platform} icon`}
                  width={16}
                  height={16}
                />
                <div className="w-full text-[#333333] text-base font-normal leading-[18px]">
                  {platform}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
