// import LinkItem from "../linkItem/LinkItem";

// const Links = () => {
//   return (
//     <section className="w-full ">
//       <form className="w-full h-full flex flex-col">
//         <div className="flex flex-col gap-6 p-6 md:p-10">
//           <div className="flex flex-col gap-10">
//             <div className=" flex flex-col items-start gap-2">
//               <h1 className="font-bold text-2xl md:text-[32px] leading-[48px] text-[#333333]">
//                 Customize your links
//               </h1>
//               <p className="text-base text-[#737373] font-normal leading-[24px]">
//                 Add/edit/remove links below and then share all your profiles
//                 with the world!
//               </p>
//             </div>

//             <div className="flex flex-col w-full gap-6">
//               <button className="w-full rounded-[8px] border border-[#633CFF] py-[11px] text-base text-[#633CFF] font-semibold leading-[24px] hover:bg-[#EFEBFF] transition duration-300 ease-in-out md:px-[27px] md:py-[11px] ">
//                 + Add new link
//               </button>
//               {/* <EmptyLinkPage /> */}
//               <div className="w-full bg-white flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-470px)]">
//                 <LinkItem />
//                 <LinkItem />
//                 <LinkItem />
//                 <LinkItem />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full absolute bottom-0 overflow-hidden bg-white z-20">
//           <div className="w-full h-[1px] bg-[#efecec]" />
//           <div className="w-full  flex items-center justify-end px-4 md:px-10 py-6 ">
//             <button
//               type="submit"
//               className="text-white w-full py-[11px] font-semibold bg-[#633CFF] flex items-center justify-center rounded-[8px] hover:bg-[#BEADFF] transition duration-300 ease-in-out md:w-max md:px-[27px] "
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Links;

"use client";
import { useContext, useEffect, useState } from "react";
import EmptyLinkPage from "../emptyLinkPage/EmptyLinkPage";
import LinkItem from "../linkItem/LinkItem";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-token";
import { MainContext } from "@/app/context/context";

// export type LinkItemType = {
//   name: string;
//   link: string,
// };

export const linkSchema = z.object({
  name: z.string(),
  link: z.string(),
});

export type LinkItemType = z.infer<typeof linkSchema>;
export type LinksDataType = {
  name: string;
  link: string;
  _id: string;
  color: string;
};

const Links = () => {
  // const [linkData, setLinkData] = useState<LinksDataType[]>([]);
  const [showLink, setShowLink] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { accessToken } = useAccessToken();
  // const [length, setLength] = useState(0);
  // const {linkData, length, getAllLinks } = useLinkData()

  // console.log(length, "length")
  // console.log("linkData from LINKS:", linkData)
  const context = useContext(MainContext);
  const { getAllLinks, linkData, length } = context || {};

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<LinkItemType>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      name: "",
      link: "",
    },
  });

  // const getAllLinks = async () => {
  //   if (!accessToken) return;
  //   try {
  //     const res = await axiosInstance.get("link", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     });
  //     if (res.status >= 200 && res.status <= 204) {
  //       console.log(res.data, "DATAAAAAAAAAAAAA");
  //       setLinkData(res.data);
  //       setLength(res.data.length);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getAllLinks?.();
    // setLength(linkData.length);
  }, [accessToken]);

  const onSubmit = async (formState: LinkItemType) => {
    try {
      const res = await axiosInstance.post("/link", formState, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.status >= 200 && res.status <= 204) {
        reset();
        setShowLink(false);
        getAllLinks?.();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!accessToken) return null;

  if (!context) return null;

  return (
    <section className="w-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col"
      >
        <div className="flex flex-col gap-6 p-6 md:p-10">
          <div className="flex flex-col gap-10">
            <div className=" flex flex-col items-start gap-2">
              <h1 className="font-bold text-2xl md:text-[32px] leading-[48px] text-[#333333]">
                Customize your links
              </h1>
              <p className="text-base text-[#737373] font-normal leading-[24px]">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>

            <div className="flex flex-col w-full gap-6">
              <button
                // onClick={() => setShowLink(true)}
                onClick={() => setShowLink(!showLink)}
                type="button"
                className="w-full rounded-[8px] border border-[#633CFF] py-[11px] text-base text-[#633CFF] font-semibold leading-[24px] hover:bg-[#EFEBFF] transition duration-300 ease-in-out md:px-[27px] md:py-[11px] "
              >
                + Add new link
              </button>

              {length === 0 && !showLink ? (
                <EmptyLinkPage
                //  showLink={showLink}
                //   length={length}
                />
              ) : length === 0 && showLink ? (
                <LinkItem
                  register={register}
                  errors={errors}
                  setDropDown={setDropDown}
                  dropDown={dropDown}
                  setValue={setValue}
                />
              ) : (length ?? 0) > 0 && !showLink ? null : (length ?? 0) > 0 &&
                showLink ? (
                <LinkItem
                  register={register}
                  errors={errors}
                  setDropDown={setDropDown}
                  dropDown={dropDown}
                  setValue={setValue}
                />
              ) : null}

              <div className="w-full bg-white flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-470px)] bg-green-300">
                {(length ?? 0) > 0 &&
                  linkData?.map((link, i) => (
                    <LinkItem
                      index={i + 1}
                      key={link._id}
                      name={link.name}
                      link={link.link}
                      // id={link._id}
                      // color={color}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full absolute bottom-0 overflow-hidden bg-white z-20">
          <div className="w-full h-[1px] bg-[#efecec]" />
          <div className="w-full  flex items-center justify-end px-4 md:px-10 py-6 ">
            <button
              type="submit"
              className="text-white w-full py-[11px] font-semibold bg-[#633CFF] flex items-center justify-center rounded-[8px] hover:bg-[#BEADFF] transition duration-300 ease-in-out md:w-max md:px-[27px] "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Links;
