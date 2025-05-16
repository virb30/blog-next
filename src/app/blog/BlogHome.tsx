"use client";

import Article from "@/components/Article/Article";
import Pagination from "@/components/Pagination/Pagination";
import Spinner from "@/components/Spinner/Spinner";
import { Post } from "./post.types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Suspense, useCallback } from "react";

interface BlogHomeProps {
  pagination: {
    page: number;
    pages: number;
    prev: number | null;
    next: number | null;
  }
  posts: Post[]
}

export default function BlogHome(props: BlogHomeProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { posts, pagination } = props;
  const { page: currentPage, pages: totalPages, prev: prevPage, next: nextPage } = pagination;

  const createPageURL = useCallback((page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  }, [pathname, searchParams])

  const changePage = useCallback((page: number) => {
    router.push(createPageURL(page));
  }, [router, createPageURL]);

  return (
    <main className="m-auto max-w-6xl p-4">
      <header className="mt-12 mb-8">
        <h1 className="text-2xl mb-3 font-bold">
          Blog
        </h1>
        <p className="font-light text-xl">
          Conteúdo sobre Desenvolvimento Web e Data Science
        </p>
      </header>
      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
          {posts.map((post) => {
            return (
              <Article post={post} key={post.uuid} />
            )
          })}
        </div>
        {totalPages > 1 && <Pagination onChange={changePage} next={nextPage} prev={prevPage} currentPage={currentPage} totalPages={totalPages} />}
      </Suspense>
    </main>
  )
}