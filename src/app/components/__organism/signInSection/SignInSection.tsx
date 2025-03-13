"use client";
import { usePathname } from "next/navigation";
import { Logo, Title } from "../../__molecules";
import SignInForm from "../signInForm/SignInForm";
import { ToastContainer } from "react-toastify";

const SignInSection = () => {
  const path = usePathname();
  const isSignInSection = path.includes("signIn");

  return (
    <section className="w-full h-full bg-transparent flex items-center justify-center ">
      <ToastContainer />
      <div className=" rounded-xl w-[82.93%] md:w-[61.87%] lg:w-[33.05%] flex flex-col gap-[64px] md:gap-0">
        <Logo />
        <div className="bg-white p-4 w-full md:p-10 flex flex-col gap-10 rounded-lg shadow-xl">
          <Title isSignInSection={isSignInSection} />
          <div className="w-full relative">
            <SignInForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInSection;
