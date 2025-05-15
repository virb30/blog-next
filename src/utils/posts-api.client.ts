import { Paginated, Post } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";
import { apiClient } from "./api.client";

export type ListPostsParams = {
  limit?: number | string;
  page: number
}

export const listPosts = async ({
  limit, page
}: ListPostsParams) => {
  const params = {
    limit,
    page
  }
  const response = await apiClient.get<Paginated<Post>>('/api/blog/posts', { params });
  return response.data;
}


export const getPost = async (slug: string) => {
  const response = await apiClient.get<Post>(`/api/blog/posts/${slug}`)
  return response.data;
}