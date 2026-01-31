import Search from "@/public/Search";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="calistoga max-sm:text-6xl"><span className="text-primary">Nex</span><span className="malachite">Link</span></h1>
        <h2 className="caladea m-[-10]">Build your next link.</h2>
      </div>
      <div className="flex m-5 gap-2">
        <div className="border rounded h-10 flex items-center gap-2 px-3">
          <Search />
          <p className="text-[#CCC] text-sm mx-2">e.g. Software Engineer Intern...</p>
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
