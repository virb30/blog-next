"use client";

import Pagination from "@/components/Pagination/Pagination";
import Spinner from "@/components/Spinner/Spinner";
import { Suspense, useCallback, useState } from "react";

export default function BlogHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [nextPage, setNextPage] = useState<number | null>(2);
  const [prevPage, setPrevPage] = useState<number | null>(null);

  const changePage = useCallback((page: number) => {
    setCurrentPage(page);
    setNextPage(page < totalPages ? page + 1 : null);
    setPrevPage(page > 1 ? page - 1 : null);
    console.log("loading posts", page);
  }, [totalPages]);

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
          Article
        </div>
        <Pagination onChange={changePage} next={nextPage} prev={prevPage} currentPage={currentPage} totalPages={totalPages} />
      </Suspense>
    </main>
  )
}