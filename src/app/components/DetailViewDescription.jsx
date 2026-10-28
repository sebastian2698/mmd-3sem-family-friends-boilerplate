

const DetailViewDes = async ({id}) => {
   const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
       headers: {
         "x-api-key": process.env.API_KEY,
       },
     });
   const breed = await response.json(); 
  
  
  
  return (
    <>
      <div className=" mx-3 ml-2  pt-3">
        <p className="text-[length:var(--breedheader)] text-[color:var(--title)] font-medium opacity-[var(--opacityheader)]">Breed description</p>
        <p className="text-[length:var(--breedtext)] text-[color:var(--title)] font-medium opacity-[var(--opacitytext)]">{breed.description}</p>
        <p className="text-[length:var(--breedheader)] text-[color:var(--title)] font-medium opacity-[var(--opacityheader)] pt-[var(--flowspace)]">Breed history</p>
        <p className="text-[length:var(--breedtext)] text-[color:var(--title)] font-medium opacity-[var(--opacitytext)] ">{breed.history}</p>
        <p className="text-[length:var(--breedheader)] text-[color:var(--title)] font-medium opacity-[var(--opacityheader)] pt-[var(--flowspace)]">Facts about breed:</p>
        <p className="text-[length:var(--breedtext)] text-[color:var(--title)] font-medium opacity-[var(--opacitytext)]"> Life span:{breed.life_span} years old.</p>
        <p className="text-[length:var(--breedtext)] text-[color:var(--title)] font-medium opacity-[var(--opacitytext)]"> Weight:{breed.weight.imperial} Kilos</p>
        <p className="text-[length:var(--breedtext)] text-[color:var(--title)] font-medium opacity-[var(--opacitytext)]"> Height:{breed.height.imperial} cm</p>
      </div>
    </>
  );
}
 
export default DetailViewDes;