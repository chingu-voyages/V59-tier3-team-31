import { FaClock, FaSearch } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const About = () => {
  return (
    <div className=" flex flex-col items-center w-full min-h-screen py-4 px-4 gap-4 md:flex-row md:justify-between md:gap-16 mb-24 max-w-300">
      {/* Search */}
      <div className="flex flex-col w-full h-72 justify-between sm:max-w-80">
        <div className="flex flex-col gap-4">
          <p className="text-4xl calistoga">Search</p>
          <div className="flex items-center justify-center w-fit h-fit p-4 rounded-md bg-malachite">
            <FaSearch className="h-16 w-16 text-white" />
          </div>
        </div>

        <p className="inter">
          Connect with opportunities that match your skills, passions, and
          career goals.
        </p>
      </div>

      <div className="w-full h-0.5 bg-gray-200 sm:max-w-80 md:hidden"></div>

      {/* Apply */}
      <div className="flex flex-col w-full h-72 justify-between sm:max-w-80">
        <div className="flex flex-col gap-4">
          <p className="text-4xl calistoga">Apply</p>
          <div className="flex items-center justify-center w-fit h-fit p-4 rounded-md bg-malachite">
            <IoIosMail className="h-16 w-16 text-white" />
          </div>
        </div>

        <p className="inter">
          Once you find the right opportunity, take the next step and apply with
          ease, turning your career goals into reality.
        </p>
      </div>

      <div className="w-full h-0.5 bg-gray-200 sm:max-w-80 md:hidden"></div>

      {/* Wait */}
      <div className="flex flex-col w-full h-72 justify-between sm:max-w-80">
        <div className="flex flex-col gap-4">
          <p className="text-4xl calistoga">Wait</p>
          <div className="flex items-center justify-center w-fit h-fit p-4 rounded-md bg-malachite">
            <FaClock className="h-16 w-16 text-white" />
          </div>
        </div>

        <p className="inter">
          Stay updated every step of the way and easily track the status of your
          applications.
        </p>
      </div>
    </div>
  );
};

export default About;
