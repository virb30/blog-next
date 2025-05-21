import { GetPostsParams, Paginated, Pagination, Post, PostsGatewayInterface } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";

export class MemoryPostsGateway implements PostsGatewayInterface {

  private posts: Post[] = [];

  constructor(posts: Post[]) {
    this.posts = posts;
  }

  async getPosts(params: GetPostsParams): Promise<Paginated<Post>> {
    const page = Number(params.page || 1);
    const limit = Number(params.limit || Infinity);
    const filteredPosts = this.filterPosts(page, limit);

    return {
      pagination: this.getPagination(page, limit),
      data: filteredPosts
    }
  }

  async getPost(slug: string): Promise<Post> {
    const post = this.posts.find((post) => post.slug === slug);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  private getPagination(page: number, limit: number): Pagination {
    let prev = null;
    let next = null;
    let pages = 1;
    if (limit !== Infinity) {
      pages = Math.ceil(this.posts.length / limit);
      prev = page - 1 >= 1 ? page - 1 : null;
      next = page + 1 <= pages ? page + 1 : null;
    }
    return {
      pages,
      page,
      next,
      prev
    }
  }

  private filterPosts(page: number, limit: number): Post[] {
    let filteredPosts = this.posts;
    if (limit !== Infinity) {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      filteredPosts = filteredPosts.slice(startIndex, endIndex);
    }
    return filteredPosts;
  }
}