import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-white text-black justify-center">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
