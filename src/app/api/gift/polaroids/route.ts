import { PolaroidsUsecaseFactory } from "@/_modules/gift/_application/usecase/polaroids.usecase-factory";
import { NextRequest } from "next/server";

export async function GET(_request: NextRequest) {
  const usecase = PolaroidsUsecaseFactory.makeListPolaroidsUsecase();
  const output = await usecase.execute();
  return Response.json(output);
}