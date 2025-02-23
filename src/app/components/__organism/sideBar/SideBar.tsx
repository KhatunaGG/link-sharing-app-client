import Image from "next/image";

const SideBar = () => {
  return (
    <div className="hidden w-full min-h-[calc(100vh-126px)]  lg:w-[40.23%] lg:flex items-center justify-center">
      <div className="w-[286px] h-[611px] relative">
        <Image
          src={"/assets/images/illustration-phone-mockup.svg"}
          alt={"logo"}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
      </div>
    </div>
  );
};

export default SideBar;
