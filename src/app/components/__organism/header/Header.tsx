"use client";
import Link from "next/link";
import { Logo } from "../../__molecules";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const isActive = (route: string) => path === route;
  const isDashboard = path.includes("dashboard");

  return (
    <section className="w-full p-4 lg:p-6">
      <div className="flex items-center md:justify-between lg:gap-4">
        <div className="LEFT flex items-center justify-between w-1/2">
          <Logo isDashboard={isDashboard} />

          <Link
            href={"/dashboard"}
            className={`flex items-center justify-center gap-2 px-[27px]  ${
              isActive("/dashboard") ? "text-[#633CFF]" : "text-[#737373]"
            }            py-[11px] rounded-lg hover:bg-[#633CFF]/10 transition duration-300 ease-in-out`}
          >
            <div className="w-[20px] h-[20px] flex items-center justify-center relative">
              <Image
                src={"/assets/icons/icon-links-header.svg"}
                alt={"logo"}
                fill
                sizes="(max-width: 768px) 20px, 20px"
              />
            </div>
            <p className="hidden text-base font-semibold leading-[24px] text-[#737373] md:flex hover:text-[#633CFF] transition duration-300 ease-in-out">
              Links
            </p>
          </Link>
        </div>

        <div className={` RIGHT flex items-center justify-between w-1/2`}>
          <Link
            href={"/userId"}
            className={`flex items-center justify-center gap-2 px-[27px] ${
              isActive("/userId") ? "text-[#633CFF]" : "text-[#737373]"
            }         py-[11px] rounded-lg hover:bg-[#633CFF]/10  transition duration-300 ease-in-out `}
          >
            <div className=" w-[20px] h-[20px] flex items-center justify-center relative">
              <Image
                src={"/assets/icons/icon-profile-details-header.svg"}
                alt={"logo"}
                fill
                sizes="(max-width: 768px) 20px, 20px"
              />
            </div>
            <p className="hidden text-base font-semibold leading-[24px] text-[#737373] md:flex hover:text-[#633CFF] transition duration-300 ease-in-out">
              Profile Details
            </p>
          </Link>

          <Link href={"/preview"}>
            <button className="text-base font-semibold leading-[24px] text-[#633CFF] py-[11px] px-[27px] rounded-lg border border-[#633CFF]">
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
