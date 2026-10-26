import { HiSearchCircle } from "react-icons/hi";
import Form from "next/form";
const searchBar = () => {
  
  return (
    <>
      <Form action="/" className="flex justify-start mt-4 gap-2 pb-5">
        <button type="submit">
          <HiSearchCircle className="bg-white rounded-2xl text-[#F2968F] size-[60] object-cover  " />
        </button>
        <input type="search" placeholder="search breeds" name="query" className="border border-gray-300 rounded-3xl m-0 pl-5 w-70  "></input>
      </Form>
    </>
  );
};
 
export default searchBar;
 
