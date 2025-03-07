// "use client";
// import Image from "next/image";
// import { ArrowRightDark } from "../../__atoms";
// import useLinkUtils from "@/app/hooks/use-linkUtils";
// import useAccessToken from "@/app/hooks/use-token";
// import Link from "next/link";
// import useLinkData from "@/app/hooks/use-data";
// import { useEffect, useState } from "react";
// import { axiosInstance } from "@/app/libs/axiosInstance";

// const PreviewSection = () => {
//   const { getIconName, getPlatformColor } = useLinkUtils();
//   const { user, accessToken } = useAccessToken();
//   const { linkData } = useLinkData();
//   const [src, setSrc] = useState("");

//   const getFilePath = async (fileId: string) => {
//     if (!accessToken) return;
//     if (!fileId) return;
//     console.log(fileId, "fileId");

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
//     <div className="w-full min-h-screen ">
//       <div className="hidden bg-[#633CFF] md:flex md:max-h-[36.28%] md:h-[357px] rounded-b-[32px]  px-6 py-6 ">
//         <div className=" bg-white w-full h-[78px] rounded-xl p-4 flex items-center justify-between">
//           <button className="border border-[#633CFF] text-[#633CFF] py-[11px] px-[27px] rounded-lg font-semibold text-base">
//             <Link href={"/dashboard"}>
//               <p>Back to Editor</p>
//             </Link>
//           </button>
//           <button className="bg-[#633CFF] text-white py-[11px] px-[27px] rounded-lg font-semibold text-base">
//             Share Link
//           </button>
//         </div>
//       </div>

//       <div className="flex  md:hidden bg-white w-full h-[78px] rounded-xl p-4 items-center justify-between mb-[60px]">
//         <button className="border border-[#633CFF] text-[#633CFF] py-[11px] px-[27px] rounded-lg font-semibold text-base flex items-center justify-center">
//           Back to Editor
//         </button>
//         <button className="bg-[#633CFF] border border-[#633CFF] px-[40.5px] text-white py-[13px] lg:px-[27px] rounded-lg font-semibold text-base flex items-center justify-center">
//           Share Link
//         </button>
//       </div>

//       <div className="w-full flex  items-center justify-center md:relative">
//         <div className="bg-transparent shadow-none md:absolute md:top-[-150px] md:z-10 w-[63.2%] md:w-[45.44%] lg:w-[24.23%] md:bg-white md:shadow-lg rounded-3xl py-[48px] md:px-[56px] flex flex-col items-center gap-[56px]">
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
//             {linkData &&
//               linkData.length > 0 &&
//               linkData.map((link, i) => {
//                 const iconName = getIconName(link.name);
//                 const color = getPlatformColor(link.name);
//                 const isFrMentor = link.name === "Frontend Mentor";
//                 return (
//                   <div
//                     key={i}
//                     style={{ background: color }}
//                     className={`w-full rounded-[8px] border text-xs font-normal leading-[18px] py-[16px] px-[18.5px] flex items-center justify-between cursor-pointer`}
//                   >
//                     <div className="w-full flex items-center  gap-2">
//                       <Image
//                         src={`/assets/icons/icon-link-boxes/icon-${iconName}-link-box.svg`}
//                         alt={""}
//                         width={20}
//                         height={20}
//                       />
//                       <p
//                         className={`text-xs leading-[18px] font-normal ${
//                           isFrMentor ? "text-[#333333]" : "text-white"
//                         }`}
//                       >
//                         {link.name}
//                       </p>
//                     </div>
//                     <ArrowRightDark isFrMentor={isFrMentor} />
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreviewSection;

"use client";
import Image from "next/image";
import { ArrowRightDark } from "../../__atoms";
import useLinkUtils from "@/app/hooks/use-linkUtils";
import useAccessToken from "@/app/hooks/use-token";
import Link from "next/link";
import useLinkData from "@/app/hooks/use-data";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/libs/axiosInstance";

const PreviewSection = () => {
  const { getIconName, getPlatformColor } = useLinkUtils();
  const { user, accessToken } = useAccessToken();
  const { linkData } = useLinkData();
  const [src, setSrc] = useState("");

  const getFilePath = async (fileId: string) => {
    if (!accessToken) return;
    if (!fileId) return;
    console.log(fileId, "fileId");

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
      {/* <div className="w-full h-full bg-red-600 md:min-h-[357px]"> */}
        <div className="hidden bg-[#633CFF] md:flex  md:min-h-[357px] rounded-b-[32px]  px-6 py-6 ">
          <div className=" bg-white w-full h-[78px] rounded-xl p-4 flex items-center justify-between">
            <button className="border border-[#633CFF] text-[#633CFF] py-[11px] px-[27px] rounded-lg font-semibold text-base">
              <Link href={"/dashboard"} >
                <p>Back to Editor</p>
              </Link>
            </button>
            <button className="bg-[#633CFF] text-white py-[11px] px-[27px] rounded-lg font-semibold text-base">
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
      {/* </div> */}

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
            {linkData &&
              linkData.length > 0 &&
              linkData.map((link, i) => {
                const iconName = getIconName(link.name);
                const color = getPlatformColor(link.name);
                const isFrMentor = link.name === "Frontend Mentor";
                return (
                  <div
                    key={i}
                    style={{ background: color }}
                    className={`w-full rounded-[8px] border text-xs font-normal leading-[18px] py-[16px] px-[18.5px] flex items-center justify-between cursor-pointer`}
                  >
                    <div className="w-full flex items-center  gap-2">
                      <Image
                        src={`/assets/icons/icon-link-boxes/icon-${iconName}-link-box.svg`}
                        alt={""}
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
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
