import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-full pb-[61px] md:pb-[51px] flex items-center md:justify-center gap-[10.83px]">
      <div className="w-[33.33px] h-[33.33px] flex items-center justify-center relative">
        <Image
          src={"/assets/Vector.png"}
          alt={"logo"}
          //   width={33.33}
          //   height={33.33}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
      </div>

      <div className="w-[135px] h-[26.25px]  relative">
        <Image
          src={"/assets/devlinks.png"}
          alt={"devlinks"}
          //   width={135}
          //   height={26.25}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
      </div>
    </div>
  );
};

export default Logo;
