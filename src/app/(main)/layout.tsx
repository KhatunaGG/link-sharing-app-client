import Header from "../components/__organism/header/Header";
import SideBar from "../components/__organism/sideBar/SideBar";
import "../globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <section className="w-full  bg-[#FAFAFA]  flex items-start justify-center p-4 md:p-6">
          <div className="w-full  flex items-stretch lg:gap-[1.72%] ">
            <div className="hidden w-full  bg-white lg:flex lg:w-[40.23%] rounded-[12px] shadow-xl overflow-hidden">
              <SideBar />
            </div>
            <div className="w-full lg:w-[58.05%]">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}
