import { PostOrPage } from "@tryghost/content-api";
import { GhostApiPostsGatewayMapper } from "../GhostApiPostsGateway.mapper";

describe("GhostApiPostsGatewayMapper", () => {
  it("maps data to entity", () => {
    const postData: PostOrPage = {
      uuid: "post-uuid",
      id: "1",
      title: "post title",
      slug: "post-slug",
      canonical_url: "http://canonical.url",
      excerpt: "post excerpt",
      html: "<p>Post content</p>",
      meta_description: "post description",
      reading_time: 5,
      tags: [
        { id: "1", slug: "tag-1", name: "tag 1" },
        { id: "2", slug: "tag-2", name: "tag 2" }
      ],
      primary_author: {
        id: "1",
        slug: "post-author",
        name: "Post author"
      },
      updated_at: "2025-01-01 15:25:32",
    };
    const output = GhostApiPostsGatewayMapper.toEntity(postData);
    expect(output).toStrictEqual({
      uuid: postData.uuid || '',
      slug: postData.slug || '',
      title: postData.title || '',
      featureImage: postData.feature_image || '',
      excerpt: postData.excerpt || '',
      updatedAt: new Date(postData.updated_at ?? ''),
      tags: postData.tags?.map((tag) => {
        return { name: tag.name }
      }),
      primaryAuthor: {
        name: postData.primary_author?.name || ''
      },
      metaDescription: postData.meta_description || '',
      canonicalUrl: postData.canonical_url || '',
      readingTime: postData.reading_time || 0,
      html: postData.html || ''
    })
  });

  it("maps data to entity with empty values", () => {
    const postData: PostOrPage = {
      uuid: "post-uuid",
      id: "1",
      slug: "post-slug",
      tags: [
        { id: "1", slug: "tag-1", name: "" },
        { id: "2", slug: "tag-2", name: "" }
      ],
    };
    const output = GhostApiPostsGatewayMapper.toEntity(postData);
    expect(output).toStrictEqual({
      uuid: postData.uuid,
      slug: postData.slug,
      title: '',
      featureImage: '',
      excerpt: '',
      updatedAt: expect.any(Date),
      tags: [],
      primaryAuthor: {
        name: ''
      },
      metaDescription: '',
      canonicalUrl: '',
      readingTime: 0,
      html: ''
    })
  });
});