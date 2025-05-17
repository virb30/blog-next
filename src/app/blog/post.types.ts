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

export interface DetailedPost extends Post {
  updatedAt: Date,
  tags: {
    name: string
  }[];
  metaDescription: string;
  canonicalUrl: string;
  readingTime: number;
  html: string;
}