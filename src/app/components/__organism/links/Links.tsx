// import React from "react";
// import LinkItem from "../linkItem/LinkItem";

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
//               {/* <EmptyLinkPage /> */}
//               <div className="w-full bg-white flex flex-col gap-6">
//               <LinkItem />
//               <LinkItem />
//               </div>

//             </div>
//           </div>
//         </div>

//         <div className="w-full absolute bottom-0">
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

import LinkItem from "../linkItem/LinkItem";

const Links = () => {
  return (
    <section className="w-full ">
      <form className="w-full h-full flex flex-col">
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
              <div className="w-full bg-white flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-470px)]">
                <LinkItem />
                <LinkItem />
                <LinkItem />
                <LinkItem />
              </div>
            </div>
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
    </section>
  );
};

export default Links;
