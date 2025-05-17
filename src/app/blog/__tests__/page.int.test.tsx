import React from "react";
import { screen } from "@testing-library/react";

import { renderPage } from "@/__test-utils__/setup";
import { PostFakeBuilder } from "@/__fixtures__/post-fake.builder";
import { listPosts } from '@utils/posts-api.client';
import Page, { LIMIT_POSTS } from "../page";

jest.mock("@utils/posts-api.client", () => ({
  listPosts: jest.fn()
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));
describe("BlogPage tests", () => {
  it("renders blog main page", async () => {
    const posts = PostFakeBuilder.thePosts(16).build().reverse();
    const firstPagePosts = posts.slice(0, 14);
    const pagination = {
      page: 1,
      pages: 2,
      prev: null,
      next: 2,
    };

    (listPosts as jest.Mock).mockResolvedValue({ data: firstPagePosts, pagination });

    const searchParams = Promise.resolve({});

    const page = await Page({ searchParams });
    renderPage(page as React.ReactElement);

    expect(listPosts).toHaveBeenCalledWith({ limit: LIMIT_POSTS, page: 1 });
    firstPagePosts.forEach((post) => {
      expect(screen.getByRole('link', { name: new RegExp(post.slug, "i") })).toBeInTheDocument();
    });
  });

  it("renders blog main page with page param", async () => {
    const posts = PostFakeBuilder.thePosts(16).build().reverse();
    const lastPagePosts = posts.slice(14, 15);
    const pagination = {
      page: 2,
      pages: 2,
      prev: 1,
      next: null,
    };

    (listPosts as jest.Mock).mockResolvedValue({ data: lastPagePosts, pagination });

    const searchParams = Promise.resolve({ page: "2" });

    const page = await Page({ searchParams });
    renderPage(page as React.ReactElement);

    expect(listPosts).toHaveBeenCalledWith({ limit: LIMIT_POSTS, page: 2 });
    lastPagePosts.forEach((post) => {
      expect(screen.getByRole('link', { name: new RegExp(post.slug, "i") })).toBeInTheDocument();
    });
  });
})