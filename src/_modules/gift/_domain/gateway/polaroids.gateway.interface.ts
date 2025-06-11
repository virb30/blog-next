import { Polaroid } from "../entity/polaroid";

export interface PolaroidsGateway {
  listPolaroids(): Promise<Polaroid[]>;
}