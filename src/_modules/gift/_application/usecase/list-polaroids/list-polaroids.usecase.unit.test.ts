import { ListPolaroidsUsecase } from "./list-polaroids.usecase";
import { PolaroidsGateway } from "@/_modules/gift/_domain/gateway/polaroids.gateway.interface";
import { PolaroidsMemoryGateway } from "@/_modules/gift/_infrastructure/gateway/memory/polaroids-memory.gateway";
import { PolaroidFakeBuilder } from "@/__fixtures__/polaroid-fake.builder";
import { Polaroid } from "@/_modules/gift/_domain/entity/polaroid";

describe('ListPolaroidsUsecase Unit tests', () => {

  let polaroidsGateway: PolaroidsGateway;
  let polaroids: Polaroid[];

  beforeEach(() => {
    polaroids = PolaroidFakeBuilder.thePolaroids(3).build();
    polaroidsGateway = new PolaroidsMemoryGateway(polaroids);
  })

  it('list all polaroids', async () => {
    const usecase = new ListPolaroidsUsecase(polaroidsGateway);
    const output = await usecase.execute();
    expect(output.polaroids).toStrictEqual(polaroids.map(polaroid => ({
      imageUrl: polaroid.imageUrl,
      caption: polaroid.caption
    })));
  });
});