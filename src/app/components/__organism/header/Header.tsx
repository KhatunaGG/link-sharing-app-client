"use client";
import Link from "next/link";
import { Logo } from "../../__molecules";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkIcon, Profile } from "../../__atoms";

const Header = () => {
  const path = usePathname();
  const isActive = (route: string) => path === route;
  const isDashboard = path.includes("dashboard");
  const isProfile = path.includes("profile");

  return (
    <section className="w-full p-4 lg:p-6">
      <div className="flex items-center md:justify-between lg:gap-4">
        <div className="LEFT flex items-center justify-between w-1/2">
          <Logo isDashboard={isDashboard} isProfile={isProfile} />

          <Link
            href={"/dashboard"}
            className={`group flex items-center justify-center gap-2 px-[27px] ${
              isActive("/dashboard") ? "bg-[#EFEBFF]" : "hover:bg-[#633CFF]/10"
            } py-[11px] rounded-lg transition duration-300 ease-in-out`}
          >
            <div className="w-[20px] h-[20px] flex items-center justify-center relative">
              <LinkIcon isActive={isActive("/dashboard")} />
            </div>
            <p
              className={`${
                isActive("/dashboard") ? "text-[#633CFF]" : "text-[#737373]"
              } group-hover:text-[#633CFF] hidden text-base font-semibold leading-[24px] md:flex transition duration-300 ease-in-out`}
            >
              Links
            </p>
          </Link>
        </div>

        <div className={` RIGHT flex items-center justify-between w-1/2`}>
          <Link
            href={"/profile"}
            className={`group flex items-center justify-center gap-2 px-[27px] ${
              isActive("/profile") ? "bg-[#EFEBFF]" : "hover:bg-[#633CFF]/10"
            } py-[11px] rounded-lg transition duration-300 ease-in-out`}
          >
            <div className="w-[20px] h-[20px] flex items-center justify-center relative">
              <Profile isActive={isActive("/profile")} />
            </div>
            <p
              className={`${
                isActive("/profile") ? "text-[#633CFF]" : "text-[#737373]"
              } group-hover:text-[#633CFF] hidden text-base font-semibold leading-[24px] md:flex transition duration-300 ease-in-out`}
            >
              Profile Details
            </p>
          </Link>

          <Link href={"/preview"}>
            <button className="text-base font-semibold leading-[24px] text-[#633CFF] py-[11px] px-[27px] rounded-lg border border-[#633CFF] hover:bg-[#BEADFF] hover:text-white transition duration-300 ease-in-out md:w-max md:px-[27px] ">
              <div className="w-[20px] h-[20px] flex items-center justify-center relative md:hidden">
                <Image
                  src={"/assets/icons/icon-preview-header.svg"}
                  alt={"logo"}
                  fill
                  sizes="(max-width: 768px) 20px, 20px"
                />
              </div>
              <span className="hidden md:flex"> Preview</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
