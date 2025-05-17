import React from "react";
import { screen } from "@testing-library/react";

import { renderPage } from "@/__test-utils__/setup";
import { PostFakeBuilder } from "@/__fixtures__/post-fake.builder";
import { getPost } from '@utils/posts-api.client';
import Page, { generateMetadata } from "./page";

jest.mock("@utils/posts-api.client", () => ({
  getPost: jest.fn()
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));
describe("PostPage tests", () => {
  it("renders post page", async () => {
    const slug = 'test-post';
    const post = PostFakeBuilder
      .aPost()
      .withSlug(slug)
      .withUpdatedAt(new Date('2025-01-01T10:00:00.000-03:00'))
      .build();

    (getPost as jest.Mock).mockResolvedValue({ ...post });

    const params = Promise.resolve({
      slug
    });

    const page = await Page({ params });
    renderPage(page as React.ReactElement);

    expect(getPost).toHaveBeenCalledWith(slug);

    const backButton = screen.getByRole('link', { name: /blog/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute('href', "/blog");

    expect(screen.getByRole('heading', { name: new RegExp(post.title, "i") })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`por ${post.primaryAuthor.name}`, "i"))).toBeInTheDocument();
    expect(screen.getByText(/01 de janeiro de 2025/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${post.readingTime} min de leitura`, "i"))).toBeInTheDocument();
    expect(screen.getByTestId('postContent')).toBeInTheDocument();
  });
});

describe('generateMetada tests', () => {
  it('generates metadata for post', async () => {
    const slug = 'test-post';
    const post = PostFakeBuilder
      .aPost()
      .withSlug(slug)
      .withUpdatedAt(new Date('2025-01-01T10:00:00.000-03:00'))
      .build();

    (getPost as jest.Mock).mockResolvedValue({ ...post });

    const params = Promise.resolve({
      slug
    });

    const metadata = await generateMetadata({ params });

    expect(metadata).toStrictEqual({
      title: post.title,
      openGraph: {
        title: post.title,
        type: 'article',
        images: post.featureImage,
        url: post.canonicalUrl,
        description: post.metaDescription,
      },
      description: post.metaDescription
    })
  });
});