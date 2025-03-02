// "use client";
// import { Dispatch, SetStateAction } from "react";
// import { ImageIcon } from "../../__atoms";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import useAccessToken from "@/app/hooks/use-token";

// export type UploadPropsType = {
//   handleRemoveFile: () => void;
//   handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   file: File | null;
//   setFile: Dispatch<SetStateAction<File | null>>;
// };
// const Upload = ({
//   handleRemoveFile,
//   handleFileChange,
//   setFile,
//   file,
// }: UploadPropsType) => {
//   const { accessToken } = useAccessToken();

//   const handleSendFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (!file) {
//       console.error("No file selected.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axiosInstance.post(`/auth/upload-image`, formData, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       console.log(res.data, "res.data");
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   if (!accessToken) return null;

//   return (
//     <div className="rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center  overflow-hidden relative">
//       {file && (
//         <button
//           type="button"
//           className="absolute top-3 right-3 cursor-pointer font-bold text-[#633CFF]"
//           onClick={handleRemoveFile}
//         >
//           X
//         </button>
//       )}
//       <input
//         type="file"
//         name="file"
//         id="fileInput"
//         className="absolute inset-0 opacity-0 cursor-pointer z-10"
//         onChange={handleFileChange}
//         disabled={!!file}
//       />
//       <label
//         htmlFor="fileInput"
//         className="w-full flex flex-col items-center gap-2 justify-center cursor-pointer group absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//       >
//         <ImageIcon />
//         <p className="text-base font-semibold leading-[24px] text-[#633CFF] hover:text-[#737373] transition duration-300 ease-in-out w-full text-center">
//           {file ? file.name : " + Upload Image"}
//         </p>
//       </label>
//       {file && (
//         <div className="absolute bg-black/20 h-[60px] w-[193px] left-0 right-0 bottom-0 z-30 border border-t-[#633CFF] flex items-center justify-center">
//           <button
//             onClick={handleSendFile}
//             type="button"
//             className="px-2 py-1 rounded-md bg-[#EFEBFF] text-xs leading-[18px] text-[#633CFF] font-bold"
//           >
//            {file ? "Delete" : " Upload"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

//*************************************************************************** */

// "use client";
// import { Dispatch, SetStateAction } from "react";
// import { ImageIcon } from "../../__atoms";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import useAccessToken from "@/app/hooks/use-token";
// import {SquareX} from "lucide-react"

// export type UploadPropsType = {
//   file: File | null;
//   setFile: Dispatch<SetStateAction<File | null>>;
//   handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleRemoveFile: () => void;
//   setFilePath: Dispatch<SetStateAction<string>>;
//   filePath: string;
//   // handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

//   src: string
// };
// const Upload = ({
//   handleRemoveFile,
//   handleFileChange,
//   // setFile,
//   file,
//   setFilePath,
//   filePath,
// }: UploadPropsType) => {
//   const { accessToken } = useAccessToken();

//   // const handleSendFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
//   //   e.preventDefault();
//   //   if (!file) {
//   //     console.log("No file selected.");
//   //     return;
//   //   }
//   //   const formData = new FormData();
//   //   formData.append("file", file);

//   //   try {
//   //     const res = await axiosInstance.post(`/auth/upload-image`, formData, {
//   //       headers: { Authorization: `Bearer ${accessToken}` },
//   //     });
//   //     if (res.status >= 200 && res.status <= 204) {
//   //       setFilePath(res.data);
//   //     }
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // };

//   if (!accessToken) return null;

//   return (
//     <div className="group rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center  overflow-hidden relative">
//       {file && (
//         <button
//           type="button"
//           className="absolute top-3 right-3 cursor-pointer font-bold text-[#633CFF]"
//           onClick={handleRemoveFile}
//         >
//           {/* X */}
//           <SquareX />
//         </button>
//       )}
//       <input
//         type="file"
//         name="file"
//         id="fileInput"
//         className="absolute inset-0 opacity-0 cursor-pointer z-10"
//         onChange={handleFileChange}
//         disabled={!!file}
//       />
//       <label
//         htmlFor="fileInput"
//         className="w-full flex flex-col items-center gap-2 justify-center cursor-pointer group absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//       >
//         <ImageIcon />
//         <p className="text-base font-semibold leading-[24px] text-[#633CFF] hover:text-[#737373] transition duration-300 ease-in-out w-full text-center">
//           {file ? file.name : " + Upload Image"}
//         </p>
//       </label>
//       {/* {file && (
//         <div className="absolute bg-black/20 h-[60px] w-[193px] left-0 right-0 bottom-0 z-30 border border-t-[#633CFF] flex items-center justify-center">
//           <button
//             onClick={handleSendFile}
//             type="button"
//             className="px-2 py-1 rounded-md bg-[#EFEBFF] text-xs leading-[18px] text-[#633CFF] font-bold"
//           >
//            {file ? "Delete" : " Upload"}
//           </button>
//         </div>
//       )} */}

//       {/* <div className="absolute bg-black/20 h-[60px] w-[193px] left-0 right-0 bottom-0 z-30 border border-t-[#633CFF] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
//         <button
//           // onClick={handleSendFile}
//           type="button"
//           className="px-2 py-1 rounded-md bg-[#EFEBFF] text-xs leading-[18px] text-[#633CFF] font-bold"
//         >
//           {filePath ? "Delete" : " Upload"}
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default Upload;

//*********************************************************************************************** */

"use client";
import { Dispatch, SetStateAction } from "react";
import { ImageIcon } from "../../__atoms";
import useAccessToken from "@/app/hooks/use-token";
import { SquareX } from "lucide-react";
import Image from "next/image";

export type UploadPropsType = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveFile: () => void;
  src: string;
};

const Upload = ({
  handleRemoveFile,
  handleFileChange,
  file,
  src,
}: UploadPropsType) => {
  const { accessToken } = useAccessToken();
  if (!accessToken) return null;

  return (
    <div className="group rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center overflow-hidden relative">
      {src ? (
        <Image
          src={src}
          alt={"logo"}
          fill
          sizes="(max-width: 768px) 193px, 193px"
        />
      ) : (
        <>
          {file && (
            <button
              type="button"
              className="absolute top-3 right-3 cursor-pointer font-bold text-[#633CFF]"
              onClick={handleRemoveFile}
            >
              <SquareX />
            </button>
          )}
          <input
            type="file"
            name="file"
            id="fileInput"
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
            onChange={handleFileChange}
            disabled={!!file}
          />
          <label
            htmlFor="fileInput"
            className="w-full flex flex-col items-center gap-2 justify-center cursor-pointer group absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <ImageIcon />
            <p className="text-base font-semibold leading-[24px] text-[#633CFF] hover:text-[#737373] transition duration-300 ease-in-out w-full text-center">
              {file ? file.name : " + Upload Image"}
            </p>
          </label>
        </>
      )}
    </div>
  );
};

export default Upload;
