import Navbar from "@/components/Navbar";
import FarmsList from "@/components/landing/FarmsList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[color:var(--agrisim-background)] min-h-screen font-outfit">
      <Navbar />  
      <FarmsList/>
    </main>
  );
}
