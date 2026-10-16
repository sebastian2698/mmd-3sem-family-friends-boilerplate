import Image from "next/image";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
const ChoosenBreed
 = () => {
    return (
      <>
        <div className="relative">
          <Image src="/dummydog.jpg" width={400} height={400} alt="dog" className="object-cover rounded-3xl aspect-[339/360] " />
          <div className="bg-white/20 backdrop-blur-[10px] p-3 absolute top-4 right-5 rounded-full  ">
            <FaStar className=" text-white size-[18]  " />
          </div>
          <Link href="/">
            <FaCircleChevronLeft className="absolute top-5 text-[#F8F8F8] bg-black rounded-full left-5 size-[32]" />
          </Link>
          <div className="flex gap-2  absolute bottom-5 left-5  bg-white/20 backdrop-blur-[10px] rounded-2xl py-3 pl-3 ">
            <Image src="/dummydog.jpg" width={400} height={400} alt="dog" className="rounded-xl size-[32]  " />
            <p className="font-medium text-white/90">Affenpinscher</p>
          </div>
        </div>
      </>
    ); 
};
 
export default ChoosenBreed
;