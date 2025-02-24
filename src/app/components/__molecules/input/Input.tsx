import Image from "next/image";

const Input = () => {
  return (
    <div className="w-full">
      <label
        htmlFor="link"
        className="text-[#333333] text-xs font-normal leading-[18px]"
      >
        Link
      </label>

      <div className="w-full relative">
        <input
          type="text"
          className="w-full text-[#333333] text-base font-normal leading-[18px] py-3 pl-4 rounded-[8px] outline-none "
        />

        <Image
          src={"/assets/icons/icon-link.svg"}
          alt={"logo"}
          width={16}
          height={16}
          sizes="(max-width: 768px) 16px, 16px"
          className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Input;
