import Image from "next/image";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { Suspense } from "react";
import Starfavorite from "./starfavorite";
const ChoosenBreed
 = async ({id}) => {
    
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  
  
   const breed = await response.json();
  console.log(breed);
  return (
    <>
      <div className="relative ">
        <Image src={breed.image.url} width={400} height={400} alt="dog" className="object-cover rounded-3xl aspect-[339/360] p-2 " />
       
          <Starfavorite breedid={breed.id} />
       
        <Link href="/">
          <FaCircleChevronLeft className="absolute top-5 text-[#F8F8F8] bg-black rounded-full left-5 size-[32]" />
        </Link>
        <div className="flex gap-2  absolute bottom-5 left-5  bg-white/20 backdrop-blur-[10px] rounded-2xl py-3 pl-4 px-4 ">
          <Image src={breed.image.url} width={400} height={400} alt="dog" className="rounded-xl size-[32]  " />
          <p className="font-medium text-white/90">{breed.name}</p>
        </div>
      </div>
    </>
  ); 
};

export default ChoosenBreed
;