"use client";
import { useState } from "react";
import { Logo, OtpCodeModal, Title } from "../../__molecules";
import Form from "../form/Form";
import { ToastContainer } from "react-toastify";

const SignUpSection = () => {
  const [otpCodeModal, setOtpCodeModal] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section className="w-full h-full bg-transparent flex items-center justify-center">
      <div className=" rounded-xl w-[82.93%] md:w-[61.87%] lg:w-[33.05%] flex flex-col gap-[64px] md:gap-0">
        <Logo />
        <div className="bg-white p-4 w-full md:p-10 flex flex-col gap-10 rounded-lg shadow-xl">
          <Title />
          <div className="w-full relative ">
            {otpCodeModal && (
              <OtpCodeModal setOtpCodeModal={setOtpCodeModal} email={email} />
            )}
            <Form
              setOtpCodeModal={setOtpCodeModal}
              otpCodeModal={otpCodeModal}
              setEmail={setEmail}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUpSection;
