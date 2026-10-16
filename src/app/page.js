import BreedCard from "./components/BreedCard";
import SearchBar from "./components/SearchBar";
import "./globals.css";

export default function ListView() {
  return (
    <>
      
        <SearchBar />
        <main className="grid grid-cols-2 gap-5">
          <BreedCard title="Affenpinscher" country="Northern," secondary="Germany" />
   
          <BreedCard title="Afghan Hound" country="Afghanistan" secondary="" />
          
          <BreedCard title="Airedale Terrier" country="Yorkshire," secondary="England" />
          <BreedCard title="Akbash" country="Western," secondary="Turkey" />
          <BreedCard />
          <BreedCard title="Akita" />
        </main>
      
    </>
  );
}
