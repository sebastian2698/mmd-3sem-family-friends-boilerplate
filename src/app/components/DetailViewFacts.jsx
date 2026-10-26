const DetailViewFacts  = async ({id}) => {
     const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
       headers: {
         "x-api-key": process.env.API_KEY,
       },
     });
   const breed = await response.json();
  
  return (
    <>
      <h2 className="text-[28px] font-bold m-1 p-1">{breed.name}</h2>

      <div className="flex justify-center gap-3 m-1 ml-1  ">
        <p className=" bg-[#ACD7FF] text-[#6B8B42] pl-[14] pr-[14] pt-[8] pb-[9] font-medium  rounded-3xl ">{breed.temperament?.split(",")[0]}</p>
        <p className=" bg-[#EDA8B3] text-[#6B8B42] pl-[14] pr-[14] pt-[8] pb-[9] font-medium   rounded-3xl">{breed.temperament?.split(",")[1]}</p>
        <p className="text-[#6B8B42] bg-[#C5E59C]  pl-[14] pr-[14] pt-[8] pb-[9] font-medium   rounded-3xl">{breed.temperament?.split(",")[2]}</p>
        <p className="text-[#978C2F] bg-[#F1E689]  pl-[14] pr-[14] pt-[8] pb-[9] font-medium  rounded-3xl">{breed.temperament?.split(",")[3]}</p>
      </div>
    </>
  );
}
 
export default DetailViewFacts ;