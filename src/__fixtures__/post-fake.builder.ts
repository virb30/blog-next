import { Post } from "@/app/blog/post.types"
import Chance from "chance"

type PropOrFactory<T> = T | ((index: number) => T);


export class PostFakeBuilder<TBuild = any> {
  private _uuid: PropOrFactory<string> = (_index) => this.chance.guid();
  private _excerpt: PropOrFactory<string> = (_index) => this.chance.sentence({ punctuation: true, words: 10 });
  private _featureImage: PropOrFactory<string> = (_index) => (`/images/${this.chance.word}.png`);
  private _primaryAuthor: PropOrFactory<{ name: string }> = (_index) => ({ name: this.chance.name() });
  private _slug: PropOrFactory<string> = (_index) => this.chance.string({ casing: "lower", symbols: false, alpha: true, numeric: true });
  private _title: PropOrFactory<string> = (_index) => this.chance.sentence({ words: 5, punctuation: false });

  private countObjs;
  private chance: Chance.Chance;

  static aPost() {
    return new PostFakeBuilder<Post>();
  }

  static thePosts(countObjs: number) {
    return new PostFakeBuilder<Post[]>(countObjs);
  }

  private constructor(countObjs: number = 1) {
    this.countObjs = countObjs;
    this.chance = Chance();
    this.chance.avatar()
  }

  withUuid(valueOrFactory: PropOrFactory<string>) {
    this._uuid = valueOrFactory;
    return this;
  }

  withSlug(valueOrFactory: PropOrFactory<string>) {
    this._slug = valueOrFactory;
    return this;
  }

  withTitle(valueOrFactory: PropOrFactory<string>) {
    this._title = valueOrFactory;
    return this;
  }

  withExcerpt(valueOrFactory: PropOrFactory<string>) {
    this._excerpt = valueOrFactory;
    return this;
  }

  withFeatureImage(valueOrFactory: PropOrFactory<string>) {
    this._featureImage = valueOrFactory;
    return this;
  }

  withAuthor(valueOrFactory: PropOrFactory<{ name: string }>) {
    this._primaryAuthor = valueOrFactory;
    return this;
  }

  get uuid() {
    return this.getValue('uuid');
  }

  get slug() {
    return this.getValue('slug');
  }

  get title() {
    return this.getValue('title');
  }

  get excerpt() {
    return this.getValue('excerpt');
  }

  get primaryAuthor() {
    return this.getValue('primaryAuthor');
  }

  get featureImage() {
    return this.getValue('featureImage');
  }

  build(): TBuild {
    const posts = new Array(this.countObjs)
      .fill(undefined)
      .map((_, index) => {
        const post: Post = {
          uuid: this.callFactory(this._uuid, index),
          title: this.callFactory(this._title, index),
          slug: this.callFactory(this._slug, index),
          excerpt: this.callFactory(this._excerpt, index),
          featureImage: this.callFactory(this._featureImage, index),
          primaryAuthor: this.callFactory(this._primaryAuthor, index)
        }
        return post;
      });
    return this.countObjs === 1 ? (posts[0] as any) : posts;
  }

  private getValue(prop: any) {
    const privateProp = `_${prop}` as keyof this;
    if (!this[privateProp]) {
      throw new Error(`Property ${prop} not have a factory, use 'with' methods`);
    }
    return this.callFactory(this[privateProp], 0);
  }

  private callFactory(factoryOrValue: PropOrFactory<any>, index: number) {
    return typeof factoryOrValue === 'function'
      ? factoryOrValue(index)
      : factoryOrValue;
  }
}