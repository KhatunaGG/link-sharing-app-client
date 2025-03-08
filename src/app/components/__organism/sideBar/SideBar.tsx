"use client";
import { MainContext } from "@/app/context/context";
import useAccessToken from "@/app/hooks/use-token";
import Image from "next/image";
import { useContext } from "react";
import { LinkBox } from "../../__molecules";

const SideBar = () => {
  const context = useContext(MainContext);
  const { src } = context || {};
  const { user } = useAccessToken();

  return (
    <div className="w-full flex items-center justify-center ">
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
              className="object-cover w-full h-full "
            />
          )}
        </div>

        <div className="absolute top-[31%] w-max text-sm font-semibold px-2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20  flex  items-center justify-center rounded-[8px] bg-[#D9D9D9] bg-transparent pt-1">
          {user?.firstName} {user?.lastName}
        </div>

        <div className="absolute top-[35%] w-max text-xs font-normal px-2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex  items-center justify-center rounded-[8px] bg-[#D9D9D9] bg-transparent pb-1">
          {user?.email}
        </div>

        <div className="absolute top-[43.97%] min-h-[280px] left-[11.23%] right-[11.23%] z-20 w-[77.19%] h-[47.54&] gap-[16px] flex flex-col items-center justify-start  rounded-[8px] bg-transparent">
          <LinkBox />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
