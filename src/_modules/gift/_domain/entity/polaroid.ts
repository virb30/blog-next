
interface PolaroidConstructorProps {
  caption?: string;
  imageUrl?: string;
}

export class Polaroid {
  readonly caption?: string;
  readonly imageUrl?: string;

  constructor({
    caption,
    imageUrl
  }: PolaroidConstructorProps) {
    this.caption = caption;
    this.imageUrl = imageUrl;
  }
}