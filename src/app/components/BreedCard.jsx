
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { Suspense } from "react";
import "../globals.css";
import Starfavorite from "./starfavorite";



export default function BreedCard({ searchParams }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchData searchParams={searchParams} />
    </Suspense>
  );
}

const FetchData = async ({ searchParams }) => {
  const { query } = await searchParams;
  const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";
  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const data = await response.json();
 
  return data.map((breed, index) => (
    <article key={index} className=" breedcard  py-4 nth-[2]:py-3  nth-[4]:py-3  nth-[6]:py-3  ">
      <div className="relative">
        <Link href={`/detailview/${breed.id}`} scroll={false}>
          <Image src={breed.image.url} loading="eager" width={400} height={400} alt="dog" className=" block  size-fit aspect-8/6 object-cover rounded-xl " />
        </Link>
        <Starfavorite breedid={breed.id} />
      </div>
      <h2 className="font-bold text-base mx-1 py-2  "> {breed.name} </h2>
      <p className="font-medium text-xs mx-1 tracking-tight  opacity-40  ">{breed.origin}</p>
      <p className="font-medium text-xs mx-1 tracking-tight opacity-40">{breed.breed_group}</p>
    </article>
  ));
};
