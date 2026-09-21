import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";
import { Currently } from "@/components/currently";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee text="Software Developer • AI/ML Engineer • Full Stack Architecture • Problem Solver" />
      <About />
      <Achievements />
      <Projects />
      <Skills />
      <Timeline />
      <Currently />
      <Contact />
      <Footer />
    </main>
  );
}
