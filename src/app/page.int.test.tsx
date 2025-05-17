import React from "react";
import { screen } from "@testing-library/react";

import { renderPage } from "@/__test-utils__/setup";
import { PostFakeBuilder } from "@/__fixtures__/post-fake.builder";
import { listPosts } from '@utils/posts-api.client';
import Page from "./page";

jest.mock("@utils/posts-api.client", () => ({
  listPosts: jest.fn()
}));
describe("HomePage tests", () => {
  it("renders home page", async () => {
    const posts = PostFakeBuilder.thePosts(3).build();

    (listPosts as jest.Mock).mockReturnValue({ data: posts });

    const page = await Page();
    renderPage(page as React.ReactElement);

    expect(listPosts).toHaveBeenCalledWith({ limit: 3, page: 1 });
    posts.forEach((post) => {
      expect(screen.getByRole('link', { name: new RegExp(post.slug, "i") })).toBeInTheDocument();
    })
  });
})