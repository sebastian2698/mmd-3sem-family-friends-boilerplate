import ChoosenBreed from "../../../components/ChoosenBreed";
import DetailViewFacts from "../../../components/DetailViewFacts";
import DetailViewDes from "../../../components/DetailViewDescription";
import "../../../globals.css";
import { Suspense } from "react";

const DetailView = async ({params}) => {
  const {id} = await params;
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <article className="  p-1 m-1">
          <ChoosenBreed id={id} />
          <DetailViewFacts id={id} />
          <DetailViewDes id={id} />
        </article>
      </Suspense>
    </>
  );



};

export default DetailView;

