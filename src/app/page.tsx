import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 justify-center flex  flex-col items-center overflow-hidden
  sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <Grid />
        <Projects /> 
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}
