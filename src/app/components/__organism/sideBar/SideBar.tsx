"use client";
import { MainContext } from "@/app/context/context";
import useAccessToken from "@/app/hooks/use-token";
import Image from "next/image";
import { useContext } from "react";
import { ArrowRightDark } from "../../__atoms";
import useLinkUtils from "@/app/hooks/use-linkUtils";
import { Reorder } from "framer-motion";
import { LinksDataType } from "@/app/interfaces/interface";

const SideBar = () => {
  const context = useContext(MainContext);
  const { src, linkData, updateLinkOrder } = context || {};
  const { user } = useAccessToken();
  const { getIconName, getPlatformColor } = useLinkUtils();

  const handleReorder = (newOrder: LinksDataType[]) => {
    if (updateLinkOrder) {
      updateLinkOrder(newOrder);
    }
  };

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const typedLinkData = linkData || [];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[286px] h-[611px] relative">
        <Image
          src={"/assets/images/illustration-phone-mockup.svg"}
          alt={"logo"}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
        <div className="w-[96px] h-[96px] rounded-full border-4 border-[#633CFF] absolute top-[115px] bg-transparent left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 overflow-hidden">
          {src && (
            <Image
              src={src}
              alt={"logo"}
              fill
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="absolute top-[31%] w-max text-sm font-semibold px-2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center rounded-[8px] bg-transparent pt-1">
          {user?.firstName} {user?.lastName}
        </div>

        <div className="absolute top-[35%] w-max text-xs font-normal px-2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center rounded-[8px] bg-transparent pb-1">
          {user?.email}
        </div>

        <div className="absolute top-[43.97%] min-h-[280px] left-[11.23%] right-[11.23%] z-20 w-[77.19%] h-[47.54%] flex flex-col items-center justify-start rounded-[8px] bg-transparent">
          {typedLinkData.length > 0 ? (
            <Reorder.Group
              axis="y"
              values={typedLinkData}
              onReorder={handleReorder}
              className="w-full flex flex-col gap-4"
            >
              {typedLinkData.slice(-5).map((link) => {
                const iconName = getIconName(link.name);
                const color = getPlatformColor(link.name);
                const isFrMentor = link.name === "Frontend Mentor";

                return (
                  <Reorder.Item
                    key={link._id}
                    value={link}
                    className="w-full cursor-grab active:cursor-grabbing "
                  >
                    <div
                      className="cursor-pointer w-full rounded-[8px] border text-xs font-normal leading-[18px] py-[11px] px-[18.5px] flex items-center justify-between"
                      style={{ background: color || "" }}
                    >
                      <div className="w-full flex items-center gap-2">
                        <Image
                          src={`/assets/icons/icon-link-boxes/icon-${iconName}-link-box.svg`}
                          alt={link.name}
                          width={20}
                          height={20}
                          draggable={false}
                        />
                        <p
                          className={`text-xs leading-[18px] font-normal ${
                            isFrMentor ? "text-[#333333]" : "text-white"
                          }`}
                        >
                          {link.name}
                        </p>
                      </div>
                      <div
                        onClick={() => handleLinkClick(link.link)}
                        className="flex items-center"
                      >
                        <ArrowRightDark isFrMentor={isFrMentor} />
                      </div>
                    </div>
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
