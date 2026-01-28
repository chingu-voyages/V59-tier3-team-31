import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-white text-black justify-center">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
