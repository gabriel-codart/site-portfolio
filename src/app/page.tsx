import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-green-500 selection:text-black">
      <Header/>
      <HomeSection/>
    </main>
  );
}
