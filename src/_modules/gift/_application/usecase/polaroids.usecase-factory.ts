import { PolaroidsGateway } from "../../_domain/gateway/polaroids.gateway.interface";
import { PolaroidsGCPStorageGateway } from "../../_infrastructure/gateway/http/polaroids-gcp-storage.gateway";
import { ListPolaroidsUsecase } from "./list-polaroids/list-polaroids.usecase";

export class PolaroidsUsecaseFactory {

  private static polaroidsGateway: PolaroidsGateway | null = null;

  private static getPolaroidsGatewayInstance(): PolaroidsGateway {
    if (!this.polaroidsGateway) {
      this.polaroidsGateway = new PolaroidsGCPStorageGateway();
    }
    return this.polaroidsGateway;
  }

  static makeListPolaroidsUsecase(): ListPolaroidsUsecase {
    return new ListPolaroidsUsecase(this.getPolaroidsGatewayInstance());
  }
}