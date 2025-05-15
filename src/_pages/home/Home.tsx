"use client";

import Profile from "@/components/Profile/Profile";
import "./Home.css";

import Article from "@/components/Article/Article";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Post = {
  uuid: string,
  title: string,
  featureImage: string,
  slug: string,
  excerpt: string,
  primaryAuthor: {
    name: string
  }
}

export type HomeProps = {
  posts: Post[]
}


export default function Home({ posts }: HomeProps) {
  return (
    <main>
      <div
        className="banner w-full bg-cover bg-fixed bg-center flex items-center justify-center flex-col py-16 px-8 text-white">
        <Profile />
      </div>
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="my-4 font-bold text-xl">
          Últimos artigos
        </h2>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
          {posts.map((post) =>
            <Article key={post.uuid} post={post} />
          )}
        </div>
        <div className="text-right font-light my-4">
          <Link href="/blog">
            Ver todos os artigos
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </main>
  );
}
