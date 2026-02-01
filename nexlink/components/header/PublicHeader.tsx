import Logo from "@/public/Logo";
import { SignInButton } from "@clerk/nextjs";

const PublicHeader = () => {
  return (
    <nav className="bg-white fixed h-16 w-full flex items-center justify-between px-3 z-10 top-0 drop-shadow-sm">
      {/* left */}
      <Logo />
      {/* right */}
      <SignInButton mode="modal">
        <button className="font-bold text-white bg-malachite text-sm px-3 py-2 rounded-md">
          Sign in
        </button>
      </SignInButton>
    </nav>
  );
};

export default PublicHeader;
