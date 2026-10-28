import BreedCard from "./components/BreedCard";
import SearchBar from "./components/SearchBar";
import "./globals.css";
import { Suspense } from "react";

export default function ListView({searchParams}) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
        <main className="grid grid-cols-2 gap-5">
          <BreedCard searchParams={searchParams} />
       
          {/* <BreedCard title="Affenpinscher" country="Northern," secondary="Germany" />
   
          <BreedCard title="Afghan Hound" country="Afghanistan" secondary="" />
          
          <BreedCard title="Airedale Terrier" country="Yorkshire," secondary="England" />
          <BreedCard title="Akbash" country="Western," secondary="Turkey" />
          <BreedCard />
          <BreedCard title="Akita" /> */}
        </main>
      </Suspense>
    </>
  );
}
