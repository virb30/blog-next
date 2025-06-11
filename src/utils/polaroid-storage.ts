import { cache } from 'react';
import { buildUrlWithParams } from './url-builder';

export interface Polaroid {
  imageUrl?: string;
  caption?: string;
}

export const listPolaroids = cache(async (): Promise<Polaroid[]> => {
  const url = buildUrlWithParams("/api/gift/polaroids");
  const response = await fetch(url);
  const { polaroids } = await response.json();
  return polaroids;
})
