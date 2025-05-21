import { Metadata } from "next";
import { listPosts } from "@/utils/posts-api.client";
import Home from "@/app/home/Home";

export const metadata: Metadata = {
  title: "Home",
}


const POSTS_LIMIT = 3

export default async function Page() {

  const { data } = await listPosts({ limit: POSTS_LIMIT, page: 1 });

  return (
    <Home posts={data} />
  );
}
