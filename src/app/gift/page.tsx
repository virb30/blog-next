import { Metadata } from "next";
import { getPolaroids } from '@/utils/polaroid-storage';
import PolaroidCarousel from "@/components/PolaroidCarousel";

export const metadata: Metadata = {
  title: "Presente",
  description: "Uma coleção de fotos especiais em formato Polaroid"
}

export const revalidate = 3600;

export default async function GiftPage() {
  try {
    const polaroids = await getPolaroids();

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Minhas Fotos</h1>

        {polaroids.length === 0 ? (
          <div className="text-center text-gray-500">
            Nenhuma foto encontrada
          </div>
        ) : (
          <PolaroidCarousel polaroids={polaroids} />
        )}
      </div>
    );
  } catch (error) {
    console.error('Erro ao carregar a página:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          Erro ao carregar as fotos. Por favor, tente novamente mais tarde.
        </div>
      </div>
    );
  }
} 