import Link from "next/link";
import ChoosenBreed from "../../components/ChoosenBreed";
import DetailViewFacts from "../../components/DetailViewFacts";
import DetailViewDes from "../../components/DetailViewDescription";

import "../../globals.css";

const DetailView = () => {
  return (
    <>
      <Link href="/"></Link>
      <ChoosenBreed />
      <DetailViewFacts />
      <DetailViewDes />

    </>
  );



};

export default DetailView;

