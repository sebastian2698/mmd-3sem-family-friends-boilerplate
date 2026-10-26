import { VscBellDot } from "react-icons/vsc";

const Logo = () => {
  return (
    <article className="flex justify-between mt-1  ">
      <h1 className="font-bold text-lg ">FamilyFriends</h1>

      <VscBellDot className="text-black size-[25] mr-3  " />
      <span className=" absolute right-5  size-3 rounded-full bg-[#F2968F]"></span>
    </article>
  );
};

export default Logo;
