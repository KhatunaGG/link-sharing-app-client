"use client";
import Image from "next/image";
import Select from "../select/Select";
import { Input } from "../../__molecules";
// import {
//   FieldErrors,
//   UseFormRegister,
//   UseFormReset,
//   UseFormSetValue,
// } from "react-hook-form";
import { FC,  useContext } from "react";

import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-token";
import { MainContext } from "@/app/context/context";
import { toast } from "react-toastify";
import { LinkItemPropsType } from "@/app/interfaces/interface";

// export type LinkItemPropsType = {
//   register?: UseFormRegister<LinkItemType>;
//   errors?: FieldErrors<LinkItemType>;
//   setDropDown?: Dispatch<SetStateAction<boolean>>;
//   dropDown?: boolean;
//   setValue?: UseFormSetValue<LinkItemType>;
//   name?: string;
//   link?: string;
//   index?: number;
//   trigger?: () => Promise<boolean>;
//   id?: string;
//   reset?: UseFormReset<LinkItemType>;
//   isCreating?: boolean;
// };

const LinkItem: FC<LinkItemPropsType> = ({
  register,
  errors,
  setDropDown,
  dropDown,
  setValue,
  trigger,
  name,
  link,
  index,
  id,
  reset,
  isCreating = false,
}) => {
  const { accessToken } = useAccessToken();
  const context = useContext(MainContext);
  const { getAllLinks } = context || {};

  const removeLink = async (id: string) => {
    if (!accessToken) return null;
    try {
      const res = await axiosInstance.delete(`/link/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.status >= 200 && res.status <= 204) {
        console.log(res.data, "res.data");
        getAllLinks?.();
        reset?.();
        toast.success("Link removed successfully", { position: "top-left" });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            Link #{index}
          </p>
        </div>

        <button
          onClick={() => removeLink(id || "")}
          className="text-base font-normal leading-[24px] text-[#737373]"
        >
          Remove
        </button>
      </div>

      <Select
        register={register}
        errors={errors}
        setDropDown={setDropDown}
        dropDown={dropDown}
        setValue={setValue}
        name={name}
        trigger={trigger}
        isCreating={isCreating}
      />
      <Input
        register={register}
        errors={errors}
        link={link}
        isCreating={isCreating}
      />
    </section>
  );
};

export default LinkItem;
