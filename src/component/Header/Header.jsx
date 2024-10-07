import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="flex items-center justify-between pt-[25px] pb-[15px] border-b-2">
      <h2 className="text-[#150b2b] text-[32px] font-bold">Bite Bills</h2>
      <div>
        <a className="pr-14 font-[700] text-cyan-800" href="#">
          Home
        </a>
        <a className="pr-14 font-[700] text-cyan-800" href="#">
          Recipes
        </a>
        <a className="pr-14 font-[700] text-cyan-800" href="#">
          About
        </a>
        <a className="pr-14 font-[700] text-cyan-800" href="#">
          Search
        </a>
      </div>
      <div className="flex items-center sdf gap-4">
        <div className="flex items-center bg-[#f3f3f4] p-[8px] rounded-3xl">
          <IoSearchSharp className="text-[20px] mr-[5px] cursor-pointer" />
          <input
            className="p-[4px] bg-[#f3f3f4] outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>
        <CgProfile className="bg-[#0be58a] w-[40px] h-[40px] rounded-[25px] p-[6px] cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
