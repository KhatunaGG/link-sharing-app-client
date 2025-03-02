// "use client";
// import { useState } from "react";
// // import Image from "next/image";

// import { ImageIcon } from "../../__atoms";
// import ProfileForm from "../profileForm/ProfileForm";

// const ProfileSection = () => {
//   const [file, setFile] = useState<File | null>(null);

//   console.log(file, "file")

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   return (
//     <form className="w-full">
//       <div className=" w-full h-full flex flex-col gap-10 px-6 pt-6 md:px-10 md:pt-10 md:pb-[154px] lf:pb-[114px]">
//         <div className="w-full flex flex-col items-start gap-2">
//           <h1 className="text-[#333333] font-bold text-[32px] leading-[48px]">
//             Profile Details
//           </h1>
//           <p className="text-base font-normal leading-[24px] text-[#737373]">
//             Add your details to create a personal touch to your profile.
//           </p>
//         </div>

//         <div className="w-full flex flex-col gap-6">
//           <div className="w-full bg-[#FAFAFA] rounded-[12px] p-[20px] flex flex-col gap-4 md:gap-0 md:flex-row">
//             <p className="text-base font-normal leading-[24px] text-[#737373] md:w-[42.66%] flex items-center justify-start">
//               Profile picture
//             </p>
// {/*
//             <div className="w-full md:w-[57.33%] lg:w-[62.79%] flex flex-col md:flex-row gap-[24px]">
//               <div className="rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center  overflow-hidden relative">
//                 <div className="flex flex-col items-center gap-2 justify-center cursor-pointer">
//                   <ImageIcon />
//                   <p className="text-base font-semibold leading-[24px] text-[#633CFF]">
//                     + Upload Image
//                   </p>
//                 </div>
//               </div>
//               <p className="text-xs leading-[18px] lg:text-base font-normal lg:leading-[24px] text-[#737373] md:w-[36.91%] lg:w-[49.77%] flex items-center justify-start">
//                 Image must be below 1024x1024px. Use PNG or JPG format.
//               </p>
//             </div> */}

//             <div className="w-full md:w-[57.33%] lg:w-[62.79%] flex flex-col md:flex-row gap-[24px]">
//               <div className="rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center  overflow-hidden relative">
//                 <input
//                   type="file"
//                   name="file"
//                   id="fileInput"
//                   className="absolute inset-0 opacity-0 cursor-pointer z-10"
//                   onChange={handleFileChange}
//                 />
//                 <label
//                   htmlFor="fileInput"
//                   className="w-full flex flex-col items-center gap-2 justify-center cursor-pointer group absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                 >
//                   <ImageIcon />
//                   <p className="text-base font-semibold leading-[24px] text-[#633CFF] hover:text-[#737373] transition duration-300 ease-in-out w-full text-center">
//                     + Upload Image
//                   </p>
//                 </label>
//               </div>

//               <p className="text-xs leading-[18px] lg:text-base font-normal lg:leading-[24px] text-[#737373] md:w-[36.91%] lg:w-[49.77%] flex items-center justify-start">
//                 Image must be below 1024x1024px. Use PNG or JPG format.
//               </p>
//             </div>

//           </div>

//           <ProfileForm />
//         </div>
//       </div>

//       <div className="w-full absolute bottom-0 overflow-hidden bg-white z-20">
//         <div className="w-full h-[1px] bg-[#efecec]" />
//         <div className="w-full  flex items-center justify-end px-4 md:px-10 py-6 ">
//           <button
//             type="submit"
//             className="text-white w-full py-[11px] font-semibold bg-[#633CFF] flex items-center justify-center rounded-[8px] hover:bg-[#BEADFF] transition duration-300 ease-in-out md:w-max md:px-[27px] "
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ProfileSection;

"use client";
import { useState } from "react";
// import Image from "next/image";
// import { ImageIcon } from "../../__atoms";
import ProfileForm from "../profileForm/ProfileForm";
import Upload from "../upload/Upload";

const ProfileSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState("")
  console.log(filePath, "filePath")

  console.log(file, "file");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // const handleRemoveFile = () => [setFile(null)];
  const handleRemoveFile = () => setFile(null);

  return (
    <form className="w-full">
      <div className=" w-full h-full flex flex-col gap-10 px-6 pt-6 md:px-10 md:pt-10 md:pb-[154px] lf:pb-[114px]">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="text-[#333333] font-bold text-[32px] leading-[48px]">
            Profile Details
          </h1>
          <p className="text-base font-normal leading-[24px] text-[#737373]">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="w-full bg-[#FAFAFA] rounded-[12px] p-[20px] flex flex-col gap-4 md:gap-0 md:flex-row">
            <p className="text-base font-normal leading-[24px] text-[#737373] md:w-[42.66%] flex items-center justify-start">
              Profile picture
            </p>

            <div className="w-full md:w-[57.33%] lg:w-[62.79%] flex flex-col md:flex-row gap-[24px]">
              {/* {file ? (
                <div className="rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex flex-col items-center justify-center  overflow-hidden relative">
                  <button
                    type="button"
                    className="absolute top-3 right-3 cursor-pointer font-bold text-[#633CFF]"
                    onClick={handleRemoveFile}
                  >
                    X
                  </button>
                  <div className="flex flex-col items-center justify-center">
                    <ImageIcon />
                    <p className="text-xs leading-[18px] lg:text-base font-normal lg:leading-[24px] text-[#737373]">
                      {file.name}
                    </p>
                  </div>
                  <div className="absolute bg-black/20 h-[60px] w-[193px] left-0 right-0 bottom-0 z-30 border border-t-[#633CFF] flex items-center justify-center">
                    <button
                      type="button"
                      className="px-2 py-1 rounded-md bg-[#EFEBFF] text-xs leading-[18px] text-[#633CFF] font-bold"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center  overflow-hidden relative">
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
                      + Upload Image
                    </p>
                  </label>
                </div>
              )} */}

              {/* <div className="rounded-[12px] bg-[#EFEBFF] h-[193px] w-[193px] flex items-center justify-center  overflow-hidden relative">
                {file && (
                  <button
                    type="button"
                    className="absolute top-3 right-3 cursor-pointer font-bold text-[#633CFF]"
                    onClick={handleRemoveFile}
                  >
                    X
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
                {file && (
                    <div className="absolute bg-black/20 h-[60px] w-[193px] left-0 right-0 bottom-0 z-30 border border-t-[#633CFF] flex items-center justify-center">
                      <button
                        type="button"
                        className="px-2 py-1 rounded-md bg-[#EFEBFF] text-xs leading-[18px] text-[#633CFF] font-bold"
                      >
                        Upload
                      </button>
                    </div>
                  )}
              </div> */}
              <Upload
                file={file}
                setFile={setFile}
                handleFileChange={handleFileChange}
                handleRemoveFile={handleRemoveFile}
                setFilePath={setFilePath}
                filePath={filePath}
              />
              <p className="text-xs leading-[18px] lg:text-base font-normal lg:leading-[24px] text-[#737373] md:w-[36.91%] lg:w-[49.77%] flex items-center justify-start">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </div>

          <ProfileForm />
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
  );
};

export default ProfileSection;
