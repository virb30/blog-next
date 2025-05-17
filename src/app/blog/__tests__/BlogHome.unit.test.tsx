import { screen } from "@testing-library/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { setup } from "@/__test-utils__/setup";
import BlogHome from "../BlogHome";
import { Post } from "../post.types";
import { PostFakeBuilder } from "@/__fixtures__/post-fake.builder";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));

describe("BlogHome Unit tests", () => {
  it("renders blog home without articles", () => {
    const pagination = {
      pages: 1,
      page: 1,
      next: null,
      prev: null
    }
    const data: Post[] = [];

    setup(
      <BlogHome pagination={pagination} posts={data} />
    );

    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: /paginação/i })).not.toBeInTheDocument();
  });

  it("renders blog home with articles not paginated", () => {
    const pagination = {
      pages: 1,
      page: 1,
      next: null,
      prev: null
    }
    const posts = [PostFakeBuilder.aPost().build()];

    setup(
      <BlogHome pagination={pagination} posts={posts} />
    );

    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: new RegExp(posts[0].slug, "i") })).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: /paginação/i })).not.toBeInTheDocument();
  });
  it("renders blog home with articles paginated", () => {
    const pagination = {
      pages: 2,
      page: 1,
      next: 2,
      prev: null
    }
    const posts = PostFakeBuilder.thePosts(2).build();
    setup(
      <BlogHome pagination={pagination} posts={posts} />
    );

    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument();
    posts.forEach((post) => {
      expect(screen.getByRole('link', { name: new RegExp(post.slug, "i") })).toBeInTheDocument();
    });
    expect(screen.queryByRole('navigation', { name: /paginação/i })).toBeInTheDocument();
  });

  it("navigates between pages", async () => {
    (usePathname as jest.Mock).mockReturnValue("/blog");
    (useSearchParams as jest.Mock).mockReturnValue({});
    const mockedPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockedPush
    }));

    const pagination = {
      pages: 2,
      page: 1,
      next: 2,
      prev: null
    }
    const posts = PostFakeBuilder.thePosts(2).build();
    const { user } = setup(
      <BlogHome pagination={pagination} posts={posts} />
    );

    const nextPage = screen.getByRole('button', { name: /próxima página/i });
    await user.click(nextPage);

    expect(mockedPush).toHaveBeenCalledWith(`/blog?page=${pagination.next}`);
  });
});