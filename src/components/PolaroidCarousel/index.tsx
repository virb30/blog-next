"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { faChevronLeft, faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PolaroidFrame from "@/components/PolaroidFrame";

interface Polaroid {
  imageUrl?: string;
  caption?: string;
  revealed?: boolean;
}

interface PolaroidCarouselProps {
  polaroids: Polaroid[];
  interval?: number;
}

export default function PolaroidCarousel({
  polaroids,
  interval = 5000
}: PolaroidCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [revealedStates, setRevealedStates] = useState<boolean[]>(
    polaroids.map(p => p.revealed || false)
  );

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === polaroids.length - 1 ? 0 : prevIndex + 1
    );
  }, [polaroids.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? polaroids.length - 1 : prevIndex - 1
    );
  }, [polaroids.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const handleReveal = (index: number, isRevealed: boolean) => {
    setRevealedStates(prev => {
      const newStates = [...prev];
      newStates[index] = isRevealed;
      return newStates;
    });
  };

  useEffect(() => {
    if (isHovered || !isAutoPlay) return;

    const timer = setInterval(goToNext, interval);

    return () => clearInterval(timer);
  }, [polaroids.length, interval, isHovered, isAutoPlay, goToNext]);

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.navButton}
        onClick={goToPrevious}
        aria-label="Foto anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div
        className={styles.carousel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.slidesContainer}>
          <div
            className={styles.slides}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.6s ease-in-out'
            }}
          >
            {polaroids.map((polaroid, index) => (
              <div key={index} className={styles.slide}>
                <PolaroidFrame
                  imageUrl={polaroid.imageUrl}
                  caption={polaroid.caption}
                  revealed={revealedStates[index]}
                  onRevealChange={(isRevealed: boolean) => handleReveal(index, isRevealed)}
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.indicators}>
            {polaroids.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.controlButton}
            onClick={toggleAutoPlay}
            aria-label={isAutoPlay ? "Pausar slideshow" : "Iniciar slideshow"}
          >
            <FontAwesomeIcon icon={isAutoPlay ? faPause : faPlay} />
          </button>
        </div>
      </div>

      <button
        className={styles.navButton}
        onClick={goToNext}
        aria-label="Próxima foto"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
} 