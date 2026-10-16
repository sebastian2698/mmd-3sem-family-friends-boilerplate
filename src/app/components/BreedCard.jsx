import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import "../globals.css";

const BreedCard = ({title,country,secondary}) => {
  return (
    <article className=" breedcard  py-4 nth-[2]:py-2  nth-[4]:py-2  nth-[6]:py-2  ">
      <div className="relative">
        <Link href="/detailview" scroll={false}>
          <Image src="/dummydog.jpg" width={400} height={400} alt="dog" className=" block  size-fit aspect-8/6 object-cover rounded-xl " />
        </Link>
        <div className=" absolute top-2 right-2 p-2 rounded-3xl  bg-[#FEFEFE]/25 backdrop-blur-[2px]">
          <FaStar className="  size-[18] text-white  " />
        </div>
      </div>
      <h2 className="font-bold text-base mx-1 py-2  ">{title ? title : "Breed title"}</h2>
      <p className="font-medium text-xs mx-1 tracking-tight  opacity-40  ">{country ? country : "Breed country"}</p>
      <p className="font-medium text-xs mx-1 tracking-tight  opacity-40  ">{secondary ? secondary : ""}</p>
    </article>
  );
};

export default BreedCard;

