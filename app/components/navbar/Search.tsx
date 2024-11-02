import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="hidden md:flex flex-1 gap-4 relative bg-white">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 rounded-md"
      />
      <button className=" rounded-full bg-orange-100 hover:bg-orange-200 absolute right-4 top-2">
        <FaSearch size={25} color="orange" />
      </button>
    </div>
  );
};

export default Search;
