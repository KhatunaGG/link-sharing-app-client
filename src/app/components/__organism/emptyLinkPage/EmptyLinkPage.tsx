import Image from "next/image";

const EmptyLinkPage = () => {
  return (
    <div className="w-full py-[46px] flex flex-col items-center justify-center gap-10 bg-[#FAFAFA] rounded-[12px] md:py-[82.5px] lg:py-[62.5px]">
      <div className="w-[249.53px] h-[160px] flex items-center justify-center relative">
        <Image
          src={"/assets/images/illustration-empty.svg"}
          alt={"logo"}
          fill
          sizes="(max-width: 768px) 20px, 20px"
        />
      </div>
      <div className="max-w-[488px] text-center space-y-6">
        <h2 className="font-bold text-2xl md:text-[32px] leading-[48px] text-[#333333]">
          Let’s get you started
        </h2>
        <p className="text-base text-[#737373] font-normal leading-[24px]">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default EmptyLinkPage;
