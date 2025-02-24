// import React from "react";
// import Image from "next/image";

// const Links = () => {
//   return (
//     <section className="w-full ">
//       <div className="w-full h-full flex flex-col">
//         <div className="flex flex-col gap-6 p-6 md:p-10">
//           <div className="flex flex-col gap-10">
//             <div className=" flex flex-col items-start gap-2">
//               <h1 className="font-bold text-2xl md:text-[32px] leading-[48px] text-[#333333]">
//                 Customize your links
//               </h1>
//               <p className="text-base text-[#737373] font-normal leading-[24px]">
//                 Add/edit/remove links below and then share all your profiles
//                 with the world!
//               </p>
//             </div>

//             <div className="flex flex-col w-full gap-6">
//               <button className="w-full rounded-[8px] border border-[#633CFF] py-[11px] text-base text-[#633CFF] font-semibold leading-[24px] hover:bg-[#EFEBFF] transition duration-300 ease-in-out md:px-[27px] md:py-[11px] ">
//                 + Add new link
//               </button>
//               <div className="w-full py-[46px] flex flex-col items-center justify-center gap-10 bg-[#FAFAFA] rounded-[12px] md:py-[82.5px] lg:py-[62.5px]">
//                 <div className="w-[249.53px] h-[160px] flex items-center justify-center relative">
//                   <Image
//                     src={"/assets/images/illustration-empty.svg"}
//                     alt={"logo"}
//                     fill
//                     sizes="(max-width: 768px) 20px, 20px"
//                   />
//                 </div>
//                 <div className="max-w-[488px] text-center space-y-6">
//                     <h2 className="font-bold text-2xl md:text-[32px] leading-[48px] text-[#333333]">Let’s get you started</h2>
//                     <p className="text-base text-[#737373] font-normal leading-[24px]">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full ">
//           <div className="w-full h-[1px] bg-[#efecec]" />
//           <div className="w-full  flex items-center justify-end px-4 md:px-10 py-6 ">
//             <button className="text-white w-full py-[11px] font-semibold bg-[#633CFF] flex items-center justify-center rounded-[8px] hover:bg-[#BEADFF] transition duration-300 ease-in-out md:w-max md:px-[27px] ">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Links;

import React from "react";
// import Image from "next/image";
// import EmptyLinkPage from "../emptyLinkPage/EmptyLinkPage";
import LinkItem from "../linkItem/LinkItem";

const Links = () => {
  return (
    <section className="w-full ">
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col gap-6 p-6 md:p-10">
          <div className="flex flex-col gap-10">
            <div className=" flex flex-col items-start gap-2">
              <h1 className="font-bold text-2xl md:text-[32px] leading-[48px] text-[#333333]">
                Customize your links
              </h1>
              <p className="text-base text-[#737373] font-normal leading-[24px]">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>

            <div className="flex flex-col w-full gap-6">
              <button className="w-full rounded-[8px] border border-[#633CFF] py-[11px] text-base text-[#633CFF] font-semibold leading-[24px] hover:bg-[#EFEBFF] transition duration-300 ease-in-out md:px-[27px] md:py-[11px] ">
                + Add new link
              </button>
              {/* <EmptyLinkPage /> */}
              <LinkItem />
            </div>
          </div>
        </div>

        <div className="w-full absolute bottom-0">
          <div className="w-full h-[1px] bg-[#efecec]" />
          <div className="w-full  flex items-center justify-end px-4 md:px-10 py-6 ">
            <button className="text-white w-full py-[11px] font-semibold bg-[#633CFF] flex items-center justify-center rounded-[8px] hover:bg-[#BEADFF] transition duration-300 ease-in-out md:w-max md:px-[27px] ">
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
