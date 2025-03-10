// "use client";
// import Image from "next/image";
// import useAccessToken from "@/app/hooks/use-token";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import { LinkBox } from "../../__molecules";
// import { usePathname } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import useLinkData, { LinksDataType } from "@/app/hooks/use-data";

// const PreviewSection = () => {
//   const { user, accessToken } = useAccessToken();
//   const [src, setSrc] = useState("");
//   const path = usePathname();
//   const isPreviewPage = path.includes("preview");
//   const { linkData } = useLinkData();

// const [data, setData] = useState<LinksDataType[]>()
//   const updatePreviewOrder = (newOrder: LinksDataType[]) => {
//     setData(newOrder);
//   };

//   const generateShareableLink = () => {
//     const baseUrl = window.location.origin;
//     const currentPath = path;
//     return `${baseUrl}${currentPath}`;
//   };

//   const handleShareLink = async () => {
//     const shareableLink = generateShareableLink();
//     try {
//       await navigator.clipboard.writeText(shareableLink);
//       toast.success("Link copied to clipboard!", { position: "top-left" });
//     } catch (error) {
//       console.error("Failed to copy the link: ", error);
//       toast.error("Failed to copy the link.", { position: "top-left" });
//     }
//   };

//   const getFilePath = async (fileId: string) => {
//     if (!accessToken) return;
//     if (!fileId) return;
//     try {
//       if (fileId) {
//         const res = await axiosInstance.post(
//           "auth/getImage",
//           { fileId },
//           {
//             headers: { Authorization: `Bearer ${accessToken}` },
//           }
//         );
//         if (res.status >= 200 && res.status <= 204) {
//           const base64Image = res.data;
//           setSrc(base64Image);
//         }
//       } else {
//         setSrc("");
//       }
//     } catch (e) {
//       console.log("Error while fetching image:", e);
//       setSrc("");
//     }
//   };

//   useEffect(() => {
//     getFilePath(user?.filePath || "");
//   }, [user?.filePath]);

//   return (
//     <div className="w-full  md:min-h-screen  md:relative ">
//       <div className="hidden bg-[#633CFF] md:flex  md:min-h-[357px] rounded-b-[32px]  px-6 py-6 ">
//         <div className=" bg-white w-full h-[78px] rounded-xl p-4 flex items-center justify-between">
//           <button className="border border-[#633CFF] text-[#633CFF] py-[11px] px-[27px] rounded-lg font-semibold text-base">
//             <Link href={"/dashboard"}>
//               <p>Back to Editor</p>
//             </Link>
//           </button>
//           <button
//             onClick={handleShareLink}
//             className="bg-[#633CFF] text-white py-[11px] px-[27px] rounded-lg font-semibold text-base"
//           >
//             Share Link
//           </button>
//         </div>
//       </div>

//       <div className="flex  md:hidden bg-white w-full h-[78px] rounded-xl p-4 items-center justify-between ">
//         <button className="border border-[#633CFF] text-[#633CFF] py-[11px] px-[27px] rounded-lg font-semibold text-base flex items-center justify-center">
//           Back to Editor
//         </button>
//         <button className="bg-[#633CFF] border border-[#633CFF] px-[40.5px] text-white py-[13px] lg:px-[27px] rounded-lg font-semibold text-base flex items-center justify-center">
//           Share Link
//         </button>
//       </div>

//       <div className="w-full   flex  items-center justify-center pb-10 bg-transparent  md:absolute md:top-[210px] md:z-10 ">
//         <div className=" bg-transparent shadow-none w-[63.2%] md:w-[45.44%]  lg:w-[24.23%] md:bg-white md:shadow-lg rounded-3xl py-[48px] md:px-[56px] flex flex-col items-center gap-[56px]">
//           <div className="w-full flex flex-col items-center justify-center gap-[25px]">
//             <div className="w-[104px] h-[104px] rounded-full border-4 border-[#633CFF] flex items-center justify-center relative overflow-hidden">
//               {src && (
//                 <Image
//                   src={src}
//                   alt={"logo"}
//                   fill
//                   className="object-cover w-full h-full "
//                 />
//               )}
//             </div>

//             <div className="flex flex-col items-center justify-center gap-2">
//               <p className="text-[#333333] text-[32px] font-bold">
//                 {user?.firstName} {user?.lastName}
//               </p>
//               <p className="text-[#737373] text-base font-normal">
//                 {user?.email}
//               </p>
//             </div>
//           </div>

//           <div className="w-full flex flex-col gap-[20px]">
//             <LinkBox isPreviewPage={isPreviewPage} data={linkData} updatePreviewOrder={updatePreviewOrder} />
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PreviewSection;

//after drug and drop*************************************

"use client";
import Image from "next/image";
import useAccessToken from "@/app/hooks/use-token";
import Link from "next/link";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import useLinkData from "@/app/hooks/use-data";
import { Reorder } from "framer-motion";
import useLinkUtils from "@/app/hooks/use-linkUtils";
import { ArrowRightDark } from "../../__atoms";

const PreviewSection = () => {
  const { user, accessToken } = useAccessToken();
  const [src, setSrc] = useState("");
  const path = usePathname();
  // const isPreviewPage = path.includes("preview");
  const { linkData, updatePreviewOrder } = useLinkData();
  const { getIconName, getPlatformColor } = useLinkUtils();

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const generateShareableLink = () => {
    const baseUrl = window.location.origin;
    const currentPath = path;
    return `${baseUrl}${currentPath}`;
  };

  const handleShareLink = async () => {
    const shareableLink = generateShareableLink();
    try {
      await navigator.clipboard.writeText(shareableLink);
      toast.success("Link copied to clipboard!", { position: "top-left" });
    } catch (error) {
      console.error("Failed to copy the link: ", error);
      toast.error("Failed to copy the link.", { position: "top-left" });
    }
  };

  const getFilePath = async (fileId: string) => {
    if (!accessToken) return;
    if (!fileId) return;
    try {
      if (fileId) {
        const res = await axiosInstance.post(
          "auth/getImage",
          { fileId },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (res.status >= 200 && res.status <= 204) {
          const base64Image = res.data;
          setSrc(base64Image);
        }
      } else {
        setSrc("");
      }
    } catch (e) {
      console.log("Error while fetching image:", e);
      setSrc("");
    }
  };

  useEffect(() => {
    getFilePath(user?.filePath || "");
  }, [user?.filePath]);

  return (
    <div className="w-full  md:min-h-screen  md:relative ">
      <div className="hidden bg-[#633CFF] md:flex  md:min-h-[357px] rounded-b-[32px]  px-6 py-6 ">
        <div className=" bg-white w-full h-[78px] rounded-xl p-4 flex items-center justify-between">
          <button className="border border-[#633CFF] text-[#633CFF] py-[11px] px-[27px] rounded-lg font-semibold text-base">
            <Link href={"/dashboard"}>
              <p>Back to Editor</p>
            </Link>
          </button>
          <button
            onClick={handleShareLink}
            className="bg-[#633CFF] text-white py-[11px] px-[27px] rounded-lg font-semibold text-base"
          >
            Share Link
          </button>
        </div>
      </div>

      <div className="flex  md:hidden bg-white w-full h-[78px] rounded-xl p-4 items-center justify-between ">
        <button className="border border-[#633CFF] text-[#633CFF] py-[11px] px-[27px] rounded-lg font-semibold text-base flex items-center justify-center">
          Back to Editor
        </button>
        <button className="bg-[#633CFF] border border-[#633CFF] px-[40.5px] text-white py-[13px] lg:px-[27px] rounded-lg font-semibold text-base flex items-center justify-center">
          Share Link
        </button>
      </div>

      <div className="w-full   flex  items-center justify-center pb-10 bg-transparent  md:absolute md:top-[210px] md:z-10 ">
        <div className=" bg-transparent shadow-none w-[63.2%] md:w-[45.44%]  lg:w-[24.23%] md:bg-white md:shadow-lg rounded-3xl py-[48px] md:px-[56px] flex flex-col items-center gap-[56px]">
          <div className="w-full flex flex-col items-center justify-center gap-[25px]">
            <div className="w-[104px] h-[104px] rounded-full border-4 border-[#633CFF] flex items-center justify-center relative overflow-hidden">
              {src && (
                <Image
                  src={src}
                  alt={"logo"}
                  fill
                  className="object-cover w-full h-full "
                />
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[#333333] text-[32px] font-bold">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-[#737373] text-base font-normal">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[20px]">
            {/* <LinkBox
              isPreviewPage={isPreviewPage}
              data={linkData}
              updatePreviewOrder={updatePreviewOrder}
            /> */}

            {linkData.length > 0 ? (
              <Reorder.Group
                axis="y"
                values={linkData}
                onReorder={updatePreviewOrder}
                className="w-full flex flex-col gap-4"
              >
                {linkData.map((link) => {
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
                        <span className="text-white font-medium">
                          {link.name}
                        </span>
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
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PreviewSection;
