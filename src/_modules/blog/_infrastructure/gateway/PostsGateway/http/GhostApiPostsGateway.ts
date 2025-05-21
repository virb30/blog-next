import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';
import { GetPostsParams, Paginated, Post, PostsGatewayInterface } from '../../../../_domain/gateway/PostsGateway.interface';
import { GhostApiPostsGatewayMapper } from './GhostApiPostsGateway.mapper';

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
      return GhostApiPostsGatewayMapper.toEntity(postData);
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

    return GhostApiPostsGatewayMapper.toEntity(postData);
  }
}