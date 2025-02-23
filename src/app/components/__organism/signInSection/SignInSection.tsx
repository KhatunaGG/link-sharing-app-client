// "use client"
// import { usePathname } from "next/navigation";
// import { Logo, Title } from "../../__molecules";
// import { Form } from "react-hook-form";

// const SignInSection = () => {
//     const path = usePathname()
//     const isSignInSection = path.includes('signIn')
//   return (
//     <section className="w-full h-full bg-transparent flex items-center justify-center">
//       <div className=" rounded-xl w-[82.93%] md:w-[61.87%] lg:w-[33.05%] ">
//         <Logo />
//         <div className="bg-white p-4 w-full md:p-10 flex flex-col gap-10 rounded-lg shadow-xl">
//           <Title isSignInSection={isSignInSection} />
//           <div className="w-full relative ">
//             {/* <Form /> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignInSection;

"use client";
import { usePathname } from "next/navigation";
import { Logo, Title } from "../../__molecules";
import SignInForm from "../signInForm/SignInForm";

const SignInSection = () => {
  const path = usePathname();
  const isSignInSection = path.includes("signIn");

  return (
    <section className="w-full h-full bg-transparent flex items-center justify-center">
      <div className=" rounded-xl w-[82.93%] md:w-[61.87%] lg:w-[33.05%] ">
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
