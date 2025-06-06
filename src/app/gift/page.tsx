import { Metadata } from "next";
import PolaroidCarousel from "@/components/PolaroidCarousel";

export const metadata: Metadata = {
  title: "Presente",
  description: "Uma coleção de fotos especiais em formato Polaroid"
}

const polaroids = [
  {
    imageUrl: "/images/profile.jpg",
    caption: "Um momento especial",
    revealed: false
  },
  {
    imageUrl: "/images/profile.jpg",
    caption: "Outro momento incrível",
    revealed: false
  },
  {
    imageUrl: "/images/profile.jpg",
    caption: "Mais uma lembrança",
    revealed: false
  }
];

export default function GiftPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Meus Momentos Especiais</h1>
      <PolaroidCarousel polaroids={polaroids} />
    </div>
  );
} 