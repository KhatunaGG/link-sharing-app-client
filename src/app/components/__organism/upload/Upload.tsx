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
// import useAccessToken from "@/app/hooks/use-token";
// import { SquareX } from "lucide-react";
// import Image from "next/image";

// export type UploadPropsType = {
//   file: File | null;
//   setFile: Dispatch<SetStateAction<File | null>>;
//   handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleRemoveFile: () => void;
//   src: string;
// };

// const Upload = ({
//   handleRemoveFile,
//   handleFileChange,
//   file,
//   src,
// }: UploadPropsType) => {
//   const { accessToken } = useAccessToken();
//   if (!accessToken) return null;

//   return (
//     <div className="group rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center overflow-hidden relative">
//       {src ? (
//    <>
//    <Image
//      src={src}
//      alt={"logo"}
//      fill
//      sizes="(max-width: 768px) 193px, 193px"
//      className="object-cover"
//    />

//    <button
//      type="button"
//      className="absolute top-3 right-3 cursor-pointer font-bold text-[#633CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//      onClick={handleRemoveFile}
//    >
//      <SquareX />
//    </button>
//  </>
//       ) : (
//         <>
//           {file && (
//             <button
//               type="button"
//               className="absolute top-3 right-3 cursor-pointer font-bold text-[#633CFF]"
//               onClick={handleRemoveFile}
//             >
//               <SquareX />
//             </button>
//           )}
//           <input
//             type="file"
//             name="file"
//             id="fileInput"
//             className="absolute inset-0 opacity-0 cursor-pointer z-10"
//             onChange={handleFileChange}
//             disabled={!!file}
//           />
//           <label
//             htmlFor="fileInput"
//             className="w-full flex flex-col items-center gap-2 justify-center cursor-pointer group absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//           >
//             <ImageIcon />
//             <p className="text-base font-semibold leading-[24px] text-[#633CFF] hover:text-[#737373] transition duration-300 ease-in-out w-full text-center">
//               {file ? file.name : " + Upload Image"}
//             </p>
//           </label>
//         </>
//       )}
//     </div>
//   );
// };

// export default Upload;

//*********************************************************************************************** */

"use client";
import { Dispatch, SetStateAction, useContext } from "react";
import { ImageIcon } from "../../__atoms";
import useAccessToken from "@/app/hooks/use-token";
import Image from "next/image";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { MainContext } from "@/app/context/context";

export type UploadPropsType = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  src: string | undefined;
};

const Upload = ({ handleFileChange, file, src }: UploadPropsType) => {
  const { accessToken, user } = useAccessToken();
  const context = useContext(MainContext);
  const { setSrc } = context || {};

  const removeImage = async (id: string) => {
    const fileId = id.split("/")[1];
    console.log(fileId, "imageToBeDeleted");
    try {
      const res = await axiosInstance.post(
        "/auth/delete",
        { fileId },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (res.status >= 200 || res.status <= 204) {
        // getFilePath?.("")
        setSrc?.("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (!accessToken) return null;

  return (
    <div className="group rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center overflow-hidden relative">
      {src ? (
        <>
          <Image
            src={src}
            alt={"logo"}
            fill
            className="object-cover w-full h-full"
          />
          <div className="rounded-[12px] group hover:bg-black/40 h-[193px] w-[193px] flex items-center justify-center overflow-hidden z-30 relative">
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
              className="w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer absolute top-0 left-0 z-20"
            >
              <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 ease-in-out">
                <ImageIcon src={src} />
                <button
                  onClick={() => removeImage(user?.filePath || "")}
                  type="button"
                  className="text-base font-semibold leading-[24px]  transition duration-300 ease-in-out text-center"
                >
                  Change Image
                </button>
              </div>
            </label>
          </div>
        </>
      ) : (
        <>
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
              {/* {file ? file.name : " + Upload Image"} */}
              Upload Image
            </p>
          </label>
        </>
      )}
    </div>
  );
};

export default Upload;
