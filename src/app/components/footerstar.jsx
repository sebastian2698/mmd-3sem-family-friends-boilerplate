"use client"
import { FaRegStar } from "react-icons/fa";
import { providecontext } from "./favoritestarcontext";
export default function Footerstar(){
const { favorite } = providecontext();
const { hasfavorite } = providecontext();
return <FaRegStar className={`star-icon ${favorite ? "text-[#ACACAC] size-[18]" : "size-[18] text-[#F2968F]"}`} />;
}








