import { AboutMeSection } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-green-500 selection:text-black">
      <Header/>
      <HomeSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <ExperiencesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}
