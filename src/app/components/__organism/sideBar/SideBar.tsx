// import Image from "next/image";

// const SideBar = () => {
//   return (
//     <div className="hidden w-full h-full lg:w-[40.23%] lg:flex items-center justify-center bg-white rounded-[12px] shadow-xl">
//       <div className="w-[286px] h-[611px] relative">
//         <Image
//           src={"/assets/images/illustration-phone-mockup.svg"}
//           alt={"logo"}
//           fill
//           sizes="(max-width: 768px) 100px, 135px"
//         />
//       </div>
//     </div>
//   );
// };

// export default SideBar;

"use client";
import { MainContext } from "@/app/context/context";
// import useLinkData, { LinksDataType } from "@/app/hooks/use-data";
// import useAccessToken from "@/app/hooks/use-token";
// import { axiosInstance } from "@/app/libs/axiosInstance";
import Image from "next/image";
import { useContext } from "react";

const SideBar = () => {
  // const [slicedLinkData, setSlicedLinkData] = useState<LinksDataType[]>([]);
  // const [modifiedData, setModifiedData] = useState<LinksDataType[]>([]);
  //  const { accessToken } = useAccessToken();
  // const { linkData, length } = useLinkData();

  const context = useContext(MainContext);
  const { linkData } = context || {};
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

        <div className="absolute top-[43.97%] min-h-[280px] left-[11.23%] right-[11.23%] z-20 w-[77.19%] h-[47.54&] gap-[16px] flex flex-col items-center justify-start border  rounded-[8px] bg-transparent">
          {linkData &&
            linkData.map((link) => {
              const iconName = getIconName(link.name);
              const color = getPlatformColor(link.name);
              return (
                <div
                  key={link._id}
                  style={{ background: color }}
                  className={`w-full rounded-[8px] border text-xs font-normal leading-[18px] py-[11px] px-10 flex items-center justify-between`}
                >
                  <div className="w-full flex items-center  gap-2">
                    <Image
                      src={`/assets/icons/select-icons/icon-${iconName}.svg`}
                      alt={""}
                      width={20}
                      height={20}
                    />
                    <p className="text-white text-xs leading-[18px] font-normal">
                      {link.name}
                    </p>
                  </div>
                  <div className="w-4 h-4 relative">
                    <Image
                      src={`/assets/icon-arrow-right.svg`}
                      alt={"icon-arrow"}
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
