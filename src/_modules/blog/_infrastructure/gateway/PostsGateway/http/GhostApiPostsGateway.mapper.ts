import { PostOrPage } from "@tryghost/content-api";

export class GhostApiPostsGatewayMapper {

  static toEntity(postData: PostOrPage) {
    const updatedAt = new Date(postData.updated_at ?? '');
    const tags = postData.tags
      ? postData.tags?.map(({ name }) => ({ name: name || '' }))
        .filter(({ name }) => name != '') : []

    return {
      uuid: postData.uuid || '',
      slug: postData.slug || '',
      title: postData.title || '',
      featureImage: postData.feature_image || '',
      excerpt: postData.excerpt || '',
      updatedAt,
      tags,
      primaryAuthor: {
        name: postData.primary_author?.name || ''
      },
      metaDescription: postData.meta_description || '',
      canonicalUrl: postData.canonical_url || '',
      readingTime: postData.reading_time || 0,
      html: postData.html || ''
    }
  }
}