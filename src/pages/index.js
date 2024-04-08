import Image from "next/image";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Sobre from "@/components/sobre";
import Contato from "@/components/contato";
import Servicos from "@/components/servicos";
import Numeros from "@/components/numeros";
import Motivos from "@/components/motivos";
import Logos from "@/components/logos";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <Hero />
      <Servicos />
      <Logos />
      <Motivos />
      <Numeros />
      <Sobre />
      <Contato />
      <Footer />
    </main>
  );
}
