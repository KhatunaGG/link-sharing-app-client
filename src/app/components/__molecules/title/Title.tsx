import { TitlePropsType } from "@/app/interfaces/interface";

const Title = ({ isSignInSection }: TitlePropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl md:text-[32px] leading-[1.5] text-[#333333]">
        {isSignInSection ? "Login" : "Create account"}
      </h1>
      <p className="text-base text-[#737373] font-normal leading-[24px]">
        {isSignInSection
          ? "Add your details below to get back into the app"
          : "Let’s get you started sharing your links!"}
      </p>
    </div>
  );
};

export default Title;
