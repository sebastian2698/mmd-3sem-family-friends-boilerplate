"use client"
import { FaStar } from "react-icons/fa";


import { providecontext } from "./favoritestarcontext";
export default function Starfavorite({breedid})  {
const { favorite, setFavorite } = providecontext();
const favoritebreeds = favorite[breedid] ||false;
  const favoritebreed = () => {
   setFavorite({...favorite,[breedid]:!favoritebreeds});
  };


  return (
  <div className="bg-gray/50 backdrop-blur-[20px] px-2 py-1 absolute top-3 right-1 rounded-2xl  ">
    <button onClick={favoritebreed}>
      <FaStar className={`star-icon ${favoritebreeds ? "text-white size-[18]" : "size-[18] text-[#ACACAC]"}`} />
    </button>
  </div>
);
};

