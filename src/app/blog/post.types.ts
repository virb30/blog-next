export interface Post {
  uuid: string;
  title: string;
  featureImage: string;
  slug: string;
  excerpt: string;
  primaryAuthor: {
    name: string
  };
}