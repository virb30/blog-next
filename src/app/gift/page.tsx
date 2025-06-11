import { Metadata } from "next";
import { listPolaroids } from '@/utils/polaroid-storage';
import PolaroidCarousel from "@/components/PolaroidCarousel";
import { verifyToken } from "@/utils/jwt-validator";
import { redirect, RedirectType } from "next/navigation";
import TimeElapsed from "@/components/TimeElapsed/TimeElapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export interface GiftPayload {
  startDate: Date;
}

export const metadata: Metadata = {
  title: "Nossa história",
  description: "Nossa história contada em fotos"
}

export const revalidate = 3600;

export default async function Page({
  searchParams
}: { searchParams: Promise<{ token: string }> }) {
  const { token } = await searchParams;

  if (!token) {
    redirect("/", RedirectType.replace);
  }
  const decoded = await verifyToken<GiftPayload>(token);
  if (!decoded) {
    redirect("/", RedirectType.replace);
  }

  const startDate = new Date(decoded.startDate || undefined);

  try {
    const polaroids = await listPolaroids();
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Nossa história...</h1>

        {polaroids.length === 0 ? (
          <div className="text-center text-gray-500">
            Nenhuma foto encontrada
          </div>
        ) : (
          <PolaroidCarousel polaroids={polaroids} />
        )}
        <div className="container m-auto flex gap-1 w-full justify-center">
          <FontAwesomeIcon icon={faHeart} color="#f00000" size="lg" />
          <h2 className="font-bold">Juntos a</h2>
          <TimeElapsed startDate={startDate} />
          <FontAwesomeIcon icon={faHeart} color="#f00000" size="lg" />
        </div>
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