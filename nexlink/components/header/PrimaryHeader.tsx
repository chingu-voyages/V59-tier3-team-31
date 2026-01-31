// This header is for the landing page
import Logo from "@/public/Logo";
import { Button } from "../ui/button";
import BurgerMenu from "@/public/BurgerMenu";

const PrimaryHeader = () => {
  return (
    <nav className="bg-white fixed border-b h-16 w-full flex items-center justify-between px-3">
      <Logo />
      <div className="flex items-center gap-4">
        <Button className="bg-primary">Log In</Button>
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default PrimaryHeader;
