import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Image from "next/image";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center overflow-hidden mx-auto sm:px-10 flex flex-col">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
