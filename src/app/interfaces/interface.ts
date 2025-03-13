import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { linkSchema } from "../schema/link-schema";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";
import { otpSchema } from "../schema/otp-schema";
import { signUpSchema } from "../schema/form-schema";
import { UserUpdateSchema } from "../schema/user-update-schema";
import { signInSchema } from "../schema/sign-in-schema";

export type ArrowRightDarkPropsType = {
  isFrMentor: boolean;
};

export type ImageIconPropsType = {
  src?: string;
};

export type LinkIconPropsType = {
  isActive: boolean;
};

export type ProfilePropsType = {
  isActive: boolean;
};

export type InputPropsType = {
  register?: UseFormRegister<LinkItemType>;
  errors?: FieldErrors<LinkItemType>;
  link?: string;
  isCreating: boolean;
};

export type LinkItemType = z.infer<typeof linkSchema>;
export type LinksDataType = {
  name: string;
  link: string;
  _id: string;
  color: string;
};

export interface PasswordInputProps {
  register: UseFormRegister<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  errors: FieldErrors<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  touchedFields: Record<string, boolean>;
}

export type LogoPropsType = {
  isDashboard?: boolean;
  isProfile?: boolean;
};

export type OtpCodeModalPropsType = {
  setOtpCodeModal: Dispatch<SetStateAction<boolean>>;
  email: string;
};

export type OtpFormStateType = z.infer<typeof otpSchema>;

export type TitlePropsType = {
  isSignInSection?: boolean;
};

export type EmailInputPropsType = {
  register: UseFormRegister<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  errors: FieldErrors<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  touchedFields: FieldValues;
};

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type FormPropsType = {
  setOtpCodeModal: Dispatch<SetStateAction<boolean>>;
  otpCodeModal: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
};

export type LinkItemPropsType = {
  register?: UseFormRegister<LinkItemType>;
  errors?: FieldErrors<LinkItemType>;
  setDropDown?: Dispatch<SetStateAction<boolean>>;
  dropDown?: boolean;
  setValue?: UseFormSetValue<LinkItemType>;
  name?: string;
  link?: string;
  index?: number;
  trigger?: () => Promise<boolean>;
  id?: string;
  reset?: UseFormReset<LinkItemType>;
  isCreating?: boolean;
};

export type ProfileFormType = {
  register: UseFormRegister<UserUpdateType>;
  errors: FieldErrors<UserUpdateType>;
  userEmail: string | undefined;
};

export type UserUpdateType = z.infer<typeof UserUpdateSchema>;

export type SelectPropsType = {
  register?: UseFormRegister<LinkItemType>;
  errors?: FieldErrors<LinkItemType>;
  setDropDown?: Dispatch<SetStateAction<boolean>>;
  dropDown?: boolean;
  setValue?: UseFormSetValue<LinkItemType>;
  name?: string;
  trigger?: UseFormTrigger<LinkItemType>;
  isCreating: boolean;
};

export type SignInFormData = z.infer<typeof signInSchema>;

export type SignInInputPropsType = {
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
};

export type SignInPasswordPropsType = {
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
};

export type UploadPropsType = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  src: string | undefined;
};

export type MainContextType = {
  getAllLinks: () => Promise<void>;
  linkData: LinksDataType[];
  length: number;
  getFilePath: (v: string) => void;
  src: string | undefined;
  setSrc: Dispatch<SetStateAction<string>>;
  updateLinkOrder: (newOrder: LinksDataType[]) => void;
};

export type UserType = {
  email: string;
  updatedAt: string;
  userName: string;
  links: string[];
  _id: string;
  firstName: string;
  lastName: string;
  filePath: string;
};
