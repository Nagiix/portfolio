import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-12 overflow-hidden">
      <Sidebar />

    </main>
  );
}