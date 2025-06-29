import { Paginated, Post } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";
import { notFound } from "next/navigation";
import { cache } from "react";
import { buildUrlWithParams, UrlParams } from "./url-builder";

export interface ListPostsParams extends UrlParams {
  limit?: number | string;
  page: number;
}

export const listPosts = cache(async (params: ListPostsParams): Promise<Paginated<Post>> => {
  const url = buildUrlWithParams("/api/blog/posts", params);
  const response = await fetch(url);
  const { pagination, data }: Paginated<Post> = await response.json();
  return {
    pagination,
    data: Array.isArray(data) ? data : []
  };
});

export const getPost = cache(async (slug: string) => {
  const url = buildUrlWithParams(`/api/blog/posts/${slug}`);
  const response = await fetch(url);
  const post: Post = await response.json()
  if (!post) {
    notFound();
  }
  return post;
})