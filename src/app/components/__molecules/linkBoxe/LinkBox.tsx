// "use client";
// import useLinkData from "@/app/hooks/use-data";
// import useLinkUtils from "@/app/hooks/use-linkUtils";
// import Image from "next/image";
// import { ArrowRightDark } from "../../__atoms";
// import { LinksDataType, MainContext } from "@/app/context/context";
// import { useContext } from "react";

// export type LinkBoxPropsType = {
//   isPreviewPage?: boolean;
//   // getIconName?: (v: string) => void;
//   // getPlatformColor?: (v: string) => void;
//   // linkData?: LinksDataType[];
// };

// const LinkBox = ({ isPreviewPage}: LinkBoxPropsType) => {
//   const { getIconName, getPlatformColor } = useLinkUtils();
//   const context = useContext(MainContext);
//   const { linkData } = context || {};
 


//   return (
//     <>
//       {linkData && linkData.length > 0 ? (
//         (isPreviewPage ? linkData : linkData.slice(-5)).map((link) => {
//           const iconName = getIconName?.(link.name);
//           const color = getPlatformColor?.(link.name);
//           const isFrMentor = link.name === "Frontend Mentor";
//           return (
//             <a
//               key={link._id}
//               href={link.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ background: color || "" }}
//               className={`${
//                 isPreviewPage ? "py-[16px] px-[16px]" : "py-[11px] px-[18.5px]"
//               } w-full rounded-[8px] border text-xs font-normal leading-[18px] flex items-center justify-between cursor-pointer`}
//             >
//               <div className="w-full flex items-center gap-2">
//                 <Image
//                   src={`/assets/icons/icon-link-boxes/icon-${iconName}-link-box.svg`}
//                   alt={link.name}
//                   width={20}
//                   height={20}
//                 />
//                 <p
//                   className={`text-xs leading-[18px] font-normal ${
//                     isFrMentor ? "text-[#333333]" : "text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </p>
//               </div>
//               <ArrowRightDark isFrMentor={isFrMentor} />
//             </a>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// export default LinkBox;




"use client";
import useLinkUtils from "@/app/hooks/use-linkUtils";
import Image from "next/image";
import { ArrowRightDark } from "../../__atoms";
import { LinksDataType, MainContext } from "@/app/context/context";
import { useContext } from "react";

export type LinkBoxPropsType = {
  isPreviewPage?: boolean;
  data?: LinksDataType[];
};

const LinkBox = ({ isPreviewPage = false, data }: LinkBoxPropsType) => {
  const { getIconName, getPlatformColor } = useLinkUtils();
  const context = useContext(MainContext);
  const linkData = context?.linkData || [];
  const isPreview = isPreviewPage === undefined ? false : isPreviewPage;
  const linksToUse = isPreview ? (data ?? []) : linkData.slice(-5);

  return (
    <>
      {(linksToUse.length > 0) ? (
        linksToUse.map((link) => {
          const iconName = getIconName(link.name);
          const color = getPlatformColor(link.name);
          const isFrMentor = link.name === "Frontend Mentor";
          return (
            <a
              key={link._id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: color || "" }}
              className={`${
                isPreview ? "py-[16px] px-[16px]" : "py-[11px] px-[18.5px]"
              } w-full rounded-[8px] border text-xs font-normal leading-[18px] flex items-center justify-between cursor-pointer`}
            >
              <div className="w-full flex items-center gap-2">
                <Image
                  src={`/assets/icons/icon-link-boxes/icon-${iconName}-link-box.svg`}
                  alt={link.name}
                  width={20}
                  height={20}
                />
                <p
                  className={`text-xs leading-[18px] font-normal ${
                    isFrMentor ? "text-[#333333]" : "text-white"
                  }`}
                >
                  {link.name}
                </p>
              </div>
              <ArrowRightDark isFrMentor={isFrMentor} />
            </a>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default LinkBox;
