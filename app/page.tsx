import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black min-h-[100vh] w-[100vw] text-white">
      <Navbar />
    </main>
  );
}
