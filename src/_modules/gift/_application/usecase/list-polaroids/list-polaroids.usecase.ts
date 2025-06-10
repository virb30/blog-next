import { PolaroidsGateway } from "@/_modules/gift/_domain/gateway/polaroids.gateway.interface";
import { Usecase } from "@/_modules/shared/application/usecase.interface";

export class ListPolaroidsUsecase implements Usecase<undefined, ListPolaroidsOutput> {

  constructor(private polaroidsGateway: PolaroidsGateway) { }

  async execute(): Promise<ListPolaroidsOutput> {
    const polaroids = await this.polaroidsGateway.listPolaroids();
    return {
      polaroids: polaroids.map(polaroid => ({
        imageUrl: polaroid.imageUrl,
        caption: polaroid.caption
      }))
    }
  }
}

interface PolaroidOutput {
  imageUrl?: string;
  caption?: string;
}

interface ListPolaroidsOutput {
  polaroids: PolaroidOutput[]
}