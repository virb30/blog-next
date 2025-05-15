export interface Post {
  uuid: string;
  slug: string;
  title: string;
  featureImage: string;
  excerpt: string;
  updatedAt: Date,
  tags: { name: string }[],
  primaryAuthor: {
    name: string;
  },
  metaDescription: string;
  canonicalUrl: string;
  readingTime: number;
  html: string;
}

interface Pagination {
  page: number;
  pages: number;
  prev: number | null;
  next: number | null;
}

export interface Paginated<T> {
  data: T[],
  pagination: Pagination
}

type IncludeParam = "authors" | "tags" | "count.posts";
type LimitParam = number | string;
type ArrayOrValue<T> = T | T[];

export interface GetPostsParams {
  include?: ArrayOrValue<IncludeParam> | undefined;
  limit?: ArrayOrValue<LimitParam> | undefined;
  page?: ArrayOrValue<number> | undefined;
}

export interface PostsGatewayInterface {
  getPosts(params: GetPostsParams): Promise<Paginated<Post>>;
  getPost(slug: string): Promise<Post>;
}