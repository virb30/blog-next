import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';
import { GetPostsParams, Paginated, Post, PostsGatewayInterface } from '../../_domain/gateway/PostsGateway.interface';

export type GhostApiPostsGatewayConstructorProps = {
  baseUrl?: string;
  key?: string;
  version?: string;
}

export class GhostApiPostsGateway implements PostsGatewayInterface {

  private client: GhostAPI;

  constructor({ baseUrl, key, version }: GhostApiPostsGatewayConstructorProps) {
    this.client = new GhostContentAPI({
      url: baseUrl || '',
      key: key || '',
      version: version || 'v4.41'
    })
  }

  async getPosts(params: GetPostsParams): Promise<Paginated<Post>> {
    const limit = params.limit || 'all'

    const response = await this.client.posts.browse({
      ...params,
      include: ['tags', 'authors'],
      limit,
    });

    const pagination = response.meta.pagination

    const posts = response.map((postData) => {
      const updatedAt = postData.updated_at ? new Date(postData.updated_at) : new Date();
      const tags = postData.tags
        ? postData.tags?.map(({ name }) => ({ name: name || '' }))
          .filter(({ name }) => name != '') : []
      const post: Post = {
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
      return post
    })

    return { pagination, data: posts }
  }

  async getPost(slug: string): Promise<Post> {
    const postData = await this.client.posts.read({
      slug,
    }, {
      include: ['tags', 'authors'],
    })

    if (!postData) {
      throw new Error('Post not found')
    }

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