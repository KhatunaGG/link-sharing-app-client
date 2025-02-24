import Image from "next/image";
import Select from "../select/Select";
import { Input } from "../../__molecules";

const LinkItem = () => {
  return (
    <section className="w-full bg-[#FAFAFA] p-[20px] rounded-[12px] flex flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-[6px] relative">
            <Image
              src={"/assets/2lines.svg"}
              alt={"linesLink"}
              fill
              sizes="(max-width: 768px) 100px, 135px"
            />
          </div>

          <p className="text-base font-bold leading-[24px] text-[#737373]">
            Link #1
          </p>
        </div>

        <p className="text-base font-normal leading-[24px] text-[#737373]">
          Remove
        </p>
      </div>
      <Select />
      <Input />
    </section>
  );
};

export default LinkItem;
