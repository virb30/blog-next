import { Polaroid } from "@/_modules/gift/_domain/entity/polaroid";
import Chance from "chance"

type PropOrFactory<T> = T | ((index: number) => T);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class PolaroidFakeBuilder<TBuild = any> {
  private _imageUrl: PropOrFactory<string> = (_index) => this.chance.url({ extensions: ["png", "jpg"], path: "images" });
  private _caption: PropOrFactory<string> = (_index) => this.chance.sentence({ punctuation: true, words: 10 });

  private countObjs;
  private chance: Chance.Chance;

  static aPolaroid() {
    return new PolaroidFakeBuilder<Polaroid>();
  }

  static thePolaroids(countObjs: number) {
    return new PolaroidFakeBuilder<Polaroid[]>(countObjs);
  }

  private constructor(countObjs: number = 1) {
    this.countObjs = countObjs;
    this.chance = Chance();
  }

  withImageUrl(valueOrFactory: PropOrFactory<string>) {
    this._imageUrl = valueOrFactory;
    return this;
  }

  withCaption(valueOrFactory: PropOrFactory<string>) {
    this._caption = valueOrFactory;
    return this;
  }


  get imageUrl() {
    return this.getValue('imageUrl');
  }

  get caption() {
    return this.getValue('caption');
  }


  build(): TBuild {
    const polaroids = new Array(this.countObjs)
      .fill(undefined)
      .map((_, index) => {
        return new Polaroid({
          imageUrl: this.callFactory(this._imageUrl, index),
          caption: this.callFactory(this._caption, index),
        })
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.countObjs === 1 ? (polaroids[0] as any) : polaroids as any;
  }

  private getValue(prop: string) {
    const privateProp = `_${prop}` as keyof this;
    if (!this[privateProp]) {
      throw new Error(`Property ${prop} not have a factory, use 'with' methods`);
    }
    return this.callFactory(this[privateProp], 0);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private callFactory(factoryOrValue: PropOrFactory<any>, index: number) {
    return typeof factoryOrValue === 'function'
      ? factoryOrValue(index)
      : factoryOrValue;
  }
}