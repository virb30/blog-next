import ContentRenderer from "@/components/ContetRenderer/ContentRenderer";
import Spinner from "@/components/Spinner/Spinner";
import { getPost } from "@/utils/posts-api.client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  const authorName = post.primaryAuthor.name ?? '';

  const formatUpdatedAt = () => {
    const updatedDate = new Date(post.updatedAt ?? '');
    return updatedDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  const formattedUpdatedAt = formatUpdatedAt();

  return (
    <Suspense fallback={<Spinner />}>
      <main className="mx-auto max-w-6xl py-2 w-full pb-6">
        <section className="max-w-6xl mt-5 mx-auto mb-8 px-4">
          <Link href="/blog">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Blog
          </Link>
        </section>
        <article className="max-w-6xl mx-auto mb-0 px-4">
          <h1 className="font-black text-5xl">
            {post.title}
          </h1>
          <div className="text-gray-500 dark:text-gray-400 flex mt-6 items-center">
            <span className="mr-2 block">por {authorName}</span>
            |
            <time className="mx-2 block text-base">{formattedUpdatedAt}</time>
            |
            <span className="ml-2 block">{post.readingTime} min de leitura</span>
          </div>
          <ContentRenderer content={post.html} />
        </article>
      </main>
    </Suspense>
  )
}