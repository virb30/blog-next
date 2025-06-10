import { Polaroid } from "@/_modules/gift/_domain/entity/polaroid";
import { PolaroidsGateway } from "@/_modules/gift/_domain/gateway/polaroids.gateway.interface";

export class PolaroidsMemoryGateway implements PolaroidsGateway {
  constructor(private polaroids: Polaroid[] = []) { }

  async listPolaroids(): Promise<Polaroid[]> {
    return this.polaroids;
  }
}