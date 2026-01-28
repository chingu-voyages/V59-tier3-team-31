import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
