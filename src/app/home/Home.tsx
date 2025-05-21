"use client";

import Link from "next/link";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Article from "@/components/Article/Article";
import Profile from "@/components/Profile/Profile";
import { Post } from "../blog/post.types";

import styles from "./Home.module.css";

export type HomeProps = {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <main>
      <div
        className={`${styles.banner} w-full bg-cover bg-fixed bg-center flex items-center justify-center flex-col py-16 px-8 text-white`}>
        <Profile />
      </div>
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="my-4 font-bold text-xl">
          Últimos artigos
        </h2>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
          {posts && posts.map((post) =>
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
