import "server-only";

import { PostsUsecaseFactory } from "@/_modules/blog/_application/usecase/Posts.usecase-factory";
import { Paginated, Post } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";
import { cache } from "react";

export interface ListPostsParams {
  limit?: number | string;
  page: number;
}

export const listPosts = cache(async (params: ListPostsParams): Promise<Paginated<Post>> => {
  const usecase = PostsUsecaseFactory.makeListPostsUsecase();
  return usecase.execute(params);
});

export const getPost = cache(async (slug: string): Promise<Post> => {
  const usecase = PostsUsecaseFactory.makeGetPostUsecase();
  return usecase.execute({ slug });
});
