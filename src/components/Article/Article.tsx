"use client";

import Image from "next/image";

export type ArticleProps = {
    post: {
        title: string,
        featureImage: string,
        slug: string,
        excerpt: string,
        primaryAuthor: {
            name: string
        }
    }
}

export default function Article({post }: ArticleProps) {
    return (
        <article className="bg-gray-300 dark:bg-gray-600 hover:opacity-80 rounded-lg">
            <header className="h-80 mb-3">
                <Image src={post.featureImage} alt={post.slug} className="h-48 mx-auto rounded-t-lg w-full" />
                <h3 className="mt-6 font-bold text-lg px-4 block overflow-ellipsis overflow-hidden">
                    { post.title }
                </h3>
                <h5 className="px-4 text-sm opacity-80 mt-2">
                    por { post.primaryAuthor.name }
                </h5>
            </header>
            <section className="px-4 mt-1 h-52"> 
                <p className="text-base overflow-ellipsis overflow-hidden text-justify">
                    { post.excerpt }
                </p>
            </section>
        </article>
    )
}