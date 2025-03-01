"use client";
import { MainContext } from "@/app/context/context";
import useAccessToken from "@/app/hooks/use-token";
import Image from "next/image";
import { useContext } from "react";
import { ArrowRightDark } from "../../__atoms";

const SideBar = () => {
  const context = useContext(MainContext);
  const { linkData } = context || {};
  const { user } = useAccessToken();

  const getIconName = (platform: string): string => {
    const iconMap: { [key: string]: string } = {
      "Dev.to": "devto",
      "Frontend Mentor": "frontendmentor",
      "Stack Overflow": "stackoverflow",
    };
    return iconMap[platform] || platform.toLowerCase();
  };

  const getPlatformColor = (name: string): string => {
    if (name === null) return "#fff";
    switch (name) {
      case "Github":
        return "#1A1A1A";
      case "Frontend Mentor":
        return "#FFFFFF";
      case "Twitter":
        return "#43B7E9";
      case "LinkedIn":
        return "#2D68FF";
      case "YouTube":
        return "#EE3939";
      case "Facebook":
        return "#2442AC";
      case "Twitch":
        return "#EE3FC8";
      case "Dev.to":
        return "#333333";
      case "Codewars":
        return "#8A1A50";
      case "freeCodeCamp":
        return "#302267";
      case "GitLab":
        return "#EB4925";
      case "Hashnode":
        return "#0330D1";
      case "Stack Overflow":
        return "#EC7100";
      default:
        return "transparent";
    }
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[286px] h-[611px] relative">
        <Image
          src={"/assets/images/illustration-phone-mockup.svg"}
          alt={"logo"}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
        <div className="w-[96px] h-[96px] rounded-full"></div>

        <div className="absolute top-[31%] text-sm font-semibold px-2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-[59%] flex  items-center justify-center rounded-[8px] bg-[#D9D9D9] bg-transparent">
          {user?.userName}
        </div>

        <div className="absolute top-[35%] w-max text-xs font-normal px-2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex  items-center justify-center rounded-[8px] bg-[#D9D9D9] pb-1">
          {user?.email}
        </div>

        <div className="absolute top-[43.97%] min-h-[280px] left-[11.23%] right-[11.23%] z-20 w-[77.19%] h-[47.54&] gap-[16px] flex flex-col items-center justify-start  rounded-[8px] bg-transparent">
          {linkData &&
            linkData.slice(-5).map((link) => {
              const iconName = getIconName(link.name);
              const color = getPlatformColor(link.name);
              const isFrMentor = link.name === "Frontend Mentor";
              return (
                <div
                  key={link._id}
                  style={{ background: color }}
                  className={`w-full rounded-[8px] border text-xs font-normal leading-[18px] py-[11px] px-10 flex items-center justify-between cursor-pointer`}
                >
                  <div className="w-full flex items-center  gap-2">
                    <Image
                      src={`/assets/icons/icon-link-boxes/icon-${iconName}-link-box.svg`}
                      alt={""}
                      width={20}
                      height={20}
                    />
                    <p
                      className={`text-xs leading-[18px] font-normal ${
                        isFrMentor ? "text-[#333333]" : "text-white"
                      }`}
                    >
                      {link.name}
                    </p>
                  </div>
                  <ArrowRightDark isFrMentor={isFrMentor} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
