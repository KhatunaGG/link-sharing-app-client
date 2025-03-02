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
import { useEffect, useState } from "react";
import ProfileForm from "../profileForm/ProfileForm";
import Upload from "../upload/Upload";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAccessToken from "@/app/hooks/use-token";
import { axiosInstance } from "@/app/libs/axiosInstance";

const UserUpdateSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Too long" }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .max(70, { message: "Too long" }),
  // email: z.string(),
  filePath: z.string(),
});
export type UserUpdateType = z.infer<typeof UserUpdateSchema>;

const ProfileSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState("");
  const { user, accessToken, getCurranUser } = useAccessToken();
  const [src, setSrc] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    // setValue,
    // trigger,
    formState: { errors },
  } = useForm<UserUpdateType>({
    resolver: zodResolver(UserUpdateSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      // email: user?.email || "",
      filePath: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        filePath: user?.filePath || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (formState: UserUpdateType) => {
    const updatedUser = {
      ...formState,
      filePath: filePath,
    };
    try {
      const res = await axiosInstance.patch(`/auth/update-user`, updatedUser, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.status >= 200 && res.status <= 204) {
        getCurranUser(accessToken || "");

        getFilePath(res.data.filePath);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getFilePath = async (fileId: string) => {
    console.log(fileId, "fileId from function");
    console.log(fileId, "fileId from function");
    if (!accessToken) return;

    try {
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
    } catch (e) {
      console.log("Error fetching image:", e);
    }
  };

  useEffect(() => {
    getFilePath(user?.filePath || "");
  }, [accessToken, user]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const res = await axiosInstance.post(`/auth/upload-image`, formData, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status >= 200 && res.status <= 204) {
          const uploadedFilePath = res.data;
          setFilePath(uploadedFilePath);
        }
      } catch (e) {
        console.error("Error uploading file:", e);
      }
    }
  };

  // const handleRemoveFile = () => [setFile(null)];
  const handleRemoveFile = () => setFile(null);

  if (!accessToken) return;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
              <Upload
                file={file}
                setFile={setFile}
                handleFileChange={handleFileChange}
                handleRemoveFile={handleRemoveFile}
                src={src}
              />
              <p className="text-xs leading-[18px] lg:text-base font-normal lg:leading-[24px] text-[#737373] md:w-[36.91%] lg:w-[49.77%] flex items-center justify-start">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </div>

          <ProfileForm
            register={register}
            errors={errors}
            userEmail={user?.email}
          />
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
