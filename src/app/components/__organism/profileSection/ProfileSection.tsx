"use client";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import ProfileForm from "../profileForm/ProfileForm";
import Upload from "../upload/Upload";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAccessToken from "@/app/hooks/use-token";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { toast } from "react-toastify";
import axios from "axios";
import { MainContext } from "@/app/context/context";

const MAX_FILE_SIZE = 1024 * 1024;
const UserUpdateSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Too long" }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .max(70, { message: "Too long" }),
  filePath: z.string(),
});

export type UserUpdateType = z.infer<typeof UserUpdateSchema>;

const ProfileSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const { user, accessToken, getCurranUser } = useAccessToken();
  const context = useContext(MainContext);
  const { getFilePath, src } = context || {};

  const capitalize = useCallback((str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }, []);
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UserUpdateType>({
    resolver: zodResolver(UserUpdateSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      filePath: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        firstName: capitalize(user?.firstName) || "",
        lastName: capitalize(user?.lastName) || "",
        filePath: user?.filePath || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (formState: UserUpdateType) => {
    let awsFilePath = formState.filePath;
    let res;
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        res = await axiosInstance.post("/auth/update-user-image", formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (res.status >= 200 && res.status <= 204) {
          awsFilePath = res.data.filePath;
          setFile(null);
          reset()
        }
      }

      const updatedUser = {
        ...formState,
        filePath: awsFilePath,
      };
      res = await axiosInstance.patch("/auth/update-user-info", updatedUser, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status >= 200 && res.status <= 204) {
        getCurranUser(accessToken || "");
        getFilePath?.(res.data.filePath);
        toast.success(`User's ${user?.email} profile updated successfully,`, {
          position: "top-left",
        });
        reset();
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response, "e.response");
        if (e.response) {
          const message = e.response.data?.message || "An error occurred";
          toast.error(message, {
            position: "top-left",
          });
        } else {
          toast.error("Network error. Please try again later.", {
            position: "top-left",
          });
        }
      } else {
        toast.error("Unexpected error occurred.", {
          position: "top-left",
        });
      }
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        toast.error("File size must be less than 1MB", {
          position: "top-left",
        });
        return;
      }
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
      if (!fileExtension || !["png", "jpg", "jpeg"].includes(fileExtension)) {
        toast.error("Only PNG or JPG files are allowed", {
          position: "top-left",
        });
        return;
      }
      setFile(selectedFile);
    }
  };


  const isFormChanged = useMemo(
    () => watch("firstName") !== user?.firstName ||
          watch("lastName") !== user?.lastName ||
          watch("filePath") !== user?.filePath ||
          file !== null,
    [user, watch, file]
  );

  // const isFormChanged =
  // watch("firstName") !== user?.firstName ||
  // watch("lastName") !== user?.lastName ||
  // watch("filePath") !== user?.filePath ||
  // file !== null;

  if (!accessToken) return;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className=" w-full h-full flex flex-col gap-10 px-6 pt-6 md:px-10 md:pt-10 md:pb-[154px] lf:pb-[114px]">
        <div className="w-full flex flex-col items-start gap-2">


          <div className="w-full flex items-center justify-between">
            <h1 className="text-[#333333] font-bold text-[32px] leading-[48px]">
              Profile Details
            </h1>
            <button type="button" className="text-base font-semibold leading-[24px] text-[#633CFF] py-[11px] px-[27px] rounded-lg border border-[#633CFF] hover:bg-[#BEADFF] hover:text-white transition duration-300 ease-in-out md:w-max md:px-[27px] ">
              Log out
            </button>
          </div>

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
          disabled={!isFormChanged}
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
