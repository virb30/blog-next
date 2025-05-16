import { setup } from "@/__test-utils__/setup";
import Home from "./Home";
import { screen } from "@testing-library/react";
import { SessionProvider } from "@/providers/SessionContext";
import { PostFakeBuilder } from "@/__fixtures__/post-fake.builder";

describe("Home Page Component unit tests", () => {
  it("renders home content", () => {
    const posts = PostFakeBuilder.thePosts(3).build();
    setup(
      <SessionProvider>
        <Home posts={posts} />
      </SessionProvider>
    );

    expect(screen.getByRole('img', { name: /avatar/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /últimos artigos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver todos os artigos/i })).toBeInTheDocument();
    posts.forEach((post) => {
      expect(screen.getByRole('link', { name: new RegExp(post.slug, 'i') })).toBeInTheDocument();
    })
  });
});