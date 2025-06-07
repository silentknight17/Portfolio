"use client";

// import Experience from "@/components/Experience";
// import { FloatingNav } from "@/components/ui/FloatingNav";
// import Footer from "@/components/Footer";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
import Image from "next/image";
// import RecentProjects from "@/components/RecentProjects";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNav").then((mod) => mod.FloatingNav),
  { ssr: false },
);
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center mx-auto sm:px-10 flex flex-col overflow-clip custom-scroll">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
