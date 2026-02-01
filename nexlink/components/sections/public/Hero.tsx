import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="calistoga text-6xl md:text-7xl lg:text-8xl">
          <span className="text-primary">Nex</span>
          <span className="malachite">Link</span>
        </h1>
        <h2 className="caladea m-[-10] md:text-lg lg:text-2xl">
          Build your next link.
        </h2>
      </div>
      <div className="flex m-5 gap-1 md:w-100 lg:w-140">
        {/* search bar */}
        <div className="border rounded py-2 px-3 flex items-center gap-1 overflow-hidden max-w-75 md:max-w-none w-full">
          <IoIosSearch className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="e.g. Software Engineer Intern..."
            className="w-full bg-transparent outline-none text-xs md:text-sm text-gray-700 placeholder:text-gray-400/50"
          />
        </div>

        {/* search button */}
        <button className="bg-malachite text-white text-xs md:text-sm py-1 px-3 rounded-md opacity-80 hover:cursor-pointer hover:opacity-100 transition-opacity duration-200">
          Search
        </button>
      </div>

      {/* recent searches */}
      <div className="flex flex-col gap-1 w-80 md:w-150 lg:w-180">
        <h3 className="caladea font-semibold md:text-lg lg:text-xl">
          Recent Searches
        </h3>
        <div className="bg-white min-h-60 lg:h-80 rounded-tr-xl rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default Hero;
