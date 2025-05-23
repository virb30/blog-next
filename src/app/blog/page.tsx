import BlogHome from "@/app/blog/BlogHome";
import { listPosts } from "@/utils/posts-api.client";
import { Metadata } from "next";
import { LIMIT_POSTS } from "./post.types";

export const metadata: Metadata = {
  title: "Blog",
}


interface BlogPageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function Page(props: BlogPageProps) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  const loadPosts = async (page: number = 1) => {
    return listPosts({ limit: LIMIT_POSTS, page });
  }

  const { pagination, data } = await loadPosts(currentPage);

  return (
    <BlogHome posts={data} pagination={pagination} />
  )
}