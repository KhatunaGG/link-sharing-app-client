import { LogoPropsType } from "@/app/interfaces/interface";
import Image from "next/image";

const Logo = ({ isDashboard, isProfile }: LogoPropsType) => {
  return (
    <div
      className={`${
        isDashboard || isProfile ? "md:pb-0" : "md:pb-[51px]"
      }  flex items-center md:justify-center gap-[10.83px]`}
    >
      <div
        className={`${
          isDashboard ? "py-4" : ""
        } w-[33.33px] h-[33.33px] flex items-center justify-center relative`}
      >
        <Image
          src={"/assets/Vector.png"}
          alt={"logo"}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
      </div>

      <div
        className={`${
          isDashboard || isProfile ? "hidden sm:flex" : "flex"
        } w-[135px] h-[26.25px]  relative`}
      >
        <Image
          src={"/assets/devlinks.png"}
          alt={"devlinks"}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
      </div>
    </div>
  );
};

export default Logo;
