import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import Article from "./Article";
import { setup } from '@/__test-utils__/setup';

describe('Article', () => {
  it('renders an article', () => {
    const post = {
      uuid: "uuid-post",
      slug: "test-post-slug",
      title: "Test Post Title",
      primaryAuthor: {
        name: "Test Post Author"
      },
      excerpt: "Test Post Excerpt",
      featureImage: "/feature/image.png"
    };

    setup(<Article post={post} />);

    expect(screen.getByRole('img', { name: /post.slug/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /post.title/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: new RegExp(`por ${post.primaryAuthor.name}`, "i") })).toBeInTheDocument();
    expect(screen.getByText(/post.excerpt/i)).toBeInTheDocument();
  })
});