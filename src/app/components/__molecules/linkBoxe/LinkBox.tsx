// "use client";
// import useLinkUtils from "@/app/hooks/use-linkUtils";
// import Image from "next/image";
// import { ArrowRightDark } from "../../__atoms";
// import { LinksDataType, MainContext } from "@/app/context/context";
// import { useContext } from "react";

// export type LinkBoxPropsType = {
//   isPreviewPage?: boolean;
//   data?: LinksDataType[];
// };

// const LinkBox = ({ isPreviewPage = false, data }: LinkBoxPropsType) => {
//   const { getIconName, getPlatformColor } = useLinkUtils();
//   const context = useContext(MainContext);
//   const linkData = context?.linkData || [];
//   const isPreview = isPreviewPage === undefined ? false : isPreviewPage;
//   const linksToUse = isPreview ? (data ?? []) : linkData.slice(-5);

//   return (
//     <>
//       {(linksToUse.length > 0) ? (
//         linksToUse.map((link) => {
//           const iconName = getIconName(link.name);
//           const color = getPlatformColor(link.name);
//           const isFrMentor = link.name === "Frontend Mentor";
//           return (
//             <a
//               key={link._id}
//               href={link.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ background: color || "" }}
//               className={`${
//                 isPreview ? "py-[16px] px-[16px]" : "py-[11px] px-[18.5px]"
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

//after drug and drop*************************************

import useLinkUtils from "@/app/hooks/use-linkUtils";
import Image from "next/image";
import { ArrowRightDark } from "../../__atoms";
import { LinksDataType, MainContext } from "@/app/context/context";
import { useContext } from "react";
import { Reorder } from "framer-motion";


export type LinkBoxPropsType = {
  isPreviewPage?: boolean;
  data?: LinksDataType[];
  updatePreviewOrder: (v: LinksDataType[]) => void;
};

const LinkBox = ({
  isPreviewPage,
  data,
  updatePreviewOrder,
}: LinkBoxPropsType) => {
  const { getIconName, getPlatformColor } = useLinkUtils();
  const context = useContext(MainContext);
  const { updateLinkOrder } = context || {};
  const linkData = context?.linkData || [];
  const isPreview = isPreviewPage === undefined ? false : isPreviewPage;
  const linksToUse = isPreview ? data ?? [] : linkData.slice(-5);

  const handleReorder = (newOrder: LinksDataType[]) => {
    console.log("Reordered:", newOrder);
    if (isPreview) {
      if (updatePreviewOrder) {
        updatePreviewOrder(newOrder);
      }
    } else {
      if (updateLinkOrder) {
        updateLinkOrder(newOrder);
      }
    }
  };

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {linksToUse.length > 0 ? (
        <Reorder.Group
          axis="y"
          values={linksToUse}
          onReorder={handleReorder}
          className="w-full flex flex-col gap-4"
        >
          {linksToUse.map((link) => {
            const iconName = getIconName(link.name);
            const color = getPlatformColor(link.name);
            const isFrMentor = link.name === "Frontend Mentor";

            return (
              <Reorder.Item
                key={link._id}
                value={link}
                className="w-full cursor-grab active:cursor-grabbing rounded-lg p-4 flex items-center justify-between"
                style={{ backgroundColor: color }}
              >
                <div className="flex items-center gap-2">
                  {iconName && (
                    <Image
                      src={`/assets/icons/icon-link-boxes/icon-${iconName}-link-box.svg`}
                      alt={link.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                  <span className="text-white font-medium">{link.name}</span>
                </div>
                <div
                  onClick={() => handleLinkClick(link.link)}
                  className="flex items-center"
                >
                  <ArrowRightDark isFrMentor={isFrMentor} />
                </div>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      ) : (
        <></>
      )}
    </>
  );
};

export default LinkBox;
