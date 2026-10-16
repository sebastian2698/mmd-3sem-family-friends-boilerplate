import { HiSearchCircle } from "react-icons/hi";
import Form from "next/form";
const searchBar = () => {
    return (
      <>
        <Form action="/search" className="flex mt-4 gap-2">
          <button type="submit">
            <HiSearchCircle className="bg-white rounded-2xl text-[#F2968F] size-[50] object-cover  " />
          </button>
          <input type="search" placeholder="search breeds" className="border border-gray-300 rounded-3xl m-0 pl-5 w-100  "></input>
        </Form>
      </>
    );
};
 
export default searchBar;
 
