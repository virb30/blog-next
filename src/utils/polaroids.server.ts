import "server-only";

import { PolaroidsUsecaseFactory } from "@/_modules/gift/_application/usecase/polaroids.usecase-factory";
import { cache } from "react";

export interface Polaroid {
  imageUrl?: string;
  caption?: string;
}

export const listPolaroids = cache(async (): Promise<Polaroid[]> => {
  const usecase = PolaroidsUsecaseFactory.makeListPolaroidsUsecase();
  const { polaroids } = await usecase.execute();
  return polaroids;
});
