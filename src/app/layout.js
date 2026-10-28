
import { Geist, Geist_Mono } from "next/font/google";
import Logo from "./components/Logo";
import { FaBatteryFull } from "react-icons/fa";
import { FaSignal } from "react-icons/fa6";
import { MdSignalWifiStatusbar4Bar } from "react-icons/md";
import { LuHouse } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { Manrope } from "next/font/google";
import { Provider } from "./components/favoritestarcontext";
import  Footerstar  from "./components/footerstar";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});
/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata = {
  title: "Family Friends",
  description: "Browse a list of breeds, view pictures, and learn about each dog’s size, personality, activity level, and care needs.",
};

export default function RootLayout({ children }) {

  return (
    /*  <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}> */
    <html lang="en" className={manrope.className}>
      <body className=" m-1 p-1 min-h-full flex flex-col">
        <header className="m-1 p-1 grid grid-cols-[auto_1rem_1rem_2rem] justify-stretch gap-1  ">
          <p>9:41</p>
          <FaSignal />
          <MdSignalWifiStatusbar4Bar />
          <FaBatteryFull />
        </header>
        <Logo />
        <Provider>
          {children}
          <footer className="flex justify-center gap-10 sticky  bottom-0 right-0 left-0 bg-white  p-5 backdrop-blur-[10px] ">
            <LuHouse className="size-[18] text-[#F2968F]  " />
            <Footerstar  />
            <BsChat className="size-[18] text-[#ACACAC]" />
            <GoPerson className="size-[18] text-[#ACACAC]" />
          </footer>
        </Provider>
      </body>
    </html>
  );
}


