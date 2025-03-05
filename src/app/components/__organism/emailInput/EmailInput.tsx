// "use client";
// import { FC } from "react";
// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import Image from "next/image";

// export type EmailInputPropsType = {
//   register: UseFormRegister<{
//     email: string;
//     password: string;
//     confirmPassword: string;
//   }>;
//   errors: FieldErrors<{
//     email: string;
//     password: string;
//     confirmPassword: string;
//   }>;
// };

// const EmailInput: FC<EmailInputPropsType> = ({ register, errors }) => {
//   return (
//     <div className="w-full flex flex-col gap-1 relative">
//       <label
//         htmlFor="email"
//         className="EMAIL text-xs leading-[18px] text-[#333333] font-normal"
//       >
//         Email address
//       </label>
//       <div className="w-full relative">
//         <input
//           id="email"
//           type="text"
//           placeholder="e.g. alex@email.com"
//           className="w-full border border-[#D9D9D9] rounded-lg py-[12px] pl-[45.5px] text-base font-normal leading-[24px] outline-none"
//           {...register("email")}
//         />
//         <div className="w-[16px] h-[16px] absolute top-1/2 left-[17.5px] transform -translate-y-1/2">
//           <Image src={"/assets/icons/icon-email.svg"} alt={"email"} fill />
//         </div>
//       </div>
//       {errors.email && (
//         <span className="text-red-500 text-xs absolute -bottom-4 left-0">{errors.email?.message}</span>
//       )}
//     </div>
//   );
// };

// export default EmailInput;

"use client";
import { FC } from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import Image from "next/image";

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

const EmailInput: FC<EmailInputPropsType> = ({
  register,
  errors,
  touchedFields,
}) => {
  return (
    <div className="w-full flex flex-col gap-1 relative">
      <label
        htmlFor="email"
        className="EMAIL text-xs leading-[18px] text-[#333333] font-normal"
      >
        Email address
      </label>
      <div className="w-full relative">
        <input
          id="email"
          type="text"
          placeholder="e.g. alex@email.com"
          className="w-full border border-[#D9D9D9] rounded-lg py-[12px] pl-[45.5px] text-base font-normal leading-[24px] outline-none"
          {...register("email")}
        />
        <div className="w-[16px] h-[16px] absolute top-1/2 left-[17.5px] transform -translate-y-1/2">
          <Image src={"/assets/icons/icon-email.svg"} alt={"email"} fill />
        </div>
      </div>
      {/* {errors.email && (
        <span className="text-red-500 text-xs absolute -bottom-4 left-0">
          {errors.email.message}
        </span>
      )} */}
      {errors.email && touchedFields.email && (
        <span className="text-red-500 text-xs absolute -bottom-4 left-0">{errors.email?.message}</span>
      )}

      {/* {formSubmitted && errors.email && (
        <span className="text-red-500 text-xs absolute -bottom-4 left-0">
          {errors.email.message}
        </span>
      )} */}

      {/* {(formErrors || Object.keys(errors).length > 0) && errors.email && (
        <span className="text-red-500 text-xs absolute -bottom-4 left-0">
          {errors.email.message}
        </span>
      )} */}
    </div>
  );
};

export default EmailInput;
