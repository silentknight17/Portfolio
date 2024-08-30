import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center overflow-hidden mx-auto sm:px-10 flex flex-col">
      <div>
        <Hero />
      </div>
    </main>
  );
}
