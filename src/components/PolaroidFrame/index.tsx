"use client";

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import clsx from 'clsx';

interface PolaroidFrameProps {
  imageUrl?: string;
  caption?: string;
  className?: string;
  revealed?: boolean;
  onRevealChange?: (isRevealed: boolean) => void;
}

export default function PolaroidFrame({
  imageUrl,
  caption,
  className,
  revealed = false,
  onRevealChange
}: PolaroidFrameProps) {
  const [isRevealed, setIsRevealed] = useState(revealed);

  useEffect(() => {
    setIsRevealed(revealed);
  }, [revealed]);

  const handleClick = () => {
    if (imageUrl) {
      const newState = !isRevealed;
      setIsRevealed(newState);
      onRevealChange?.(newState);
    }
  };

  return (
    <div
      className={clsx(styles.polaroid, className, {
        [styles.cursorPointer]: !isRevealed
      })}
      onClick={handleClick}
    >
      <div className={styles.imageContainer}>
        {imageUrl && <Image
          width={100}
          height={100}
          src={imageUrl}
          alt={caption || 'Polaroid image'}
          className={clsx(styles.image, {
            [styles.revealed]: isRevealed,
            [styles.hidden]: !isRevealed
          })}
        />}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};