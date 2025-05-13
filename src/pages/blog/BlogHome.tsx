"use client";

import Spinner from "@/components/Spinner/Spinner";
import { Suspense } from "react";

export default function BlogHome() {
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
                <div  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
                    Article
                </div>
            </Suspense>
        </main>
    )
}