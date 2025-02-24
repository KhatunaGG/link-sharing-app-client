// import Image from "next/image";

// const SideBar = () => {
//   return (
//     <div className="hidden w-full h-full lg:w-[40.23%] lg:flex items-center justify-center bg-white rounded-[12px] shadow-xl">
//       <div className="w-[286px] h-[611px] relative">
//         <Image
//           src={"/assets/images/illustration-phone-mockup.svg"}
//           alt={"logo"}
//           fill
//           sizes="(max-width: 768px) 100px, 135px"
//         />
//       </div>
//     </div>
//   );
// };

// export default SideBar;



import Image from "next/image";
const SideBar = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[286px] h-[611px] relative">
        <Image
          src={"/assets/images/illustration-phone-mockup.svg"}
          alt={"logo"}
          fill
          sizes="(max-width: 768px) 100px, 135px"
        />
      </div>
    </div>
  );
};

export default SideBar;
