import { Post, PostsGatewayInterface } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";
import { GetPostUsecase } from "./GetPost.usecase";
import { MemoryPostsGateway } from "@/_modules/blog/_infrastructure/gateway/PostsGateway/memory/MemoryPostsGateway";
import { PostFakeBuilder } from "@/__fixtures__/post-fake.builder";

describe('GetPostUsecase Unit tests', () => {

  let postsGateway: PostsGatewayInterface;
  let posts: Post[];

  beforeEach(() => {
    posts = PostFakeBuilder.thePosts(3).build();
    postsGateway = new MemoryPostsGateway(posts);
  })

  it('gets a post by slug', async () => {

    const usecase = new GetPostUsecase(postsGateway);
    const input = {
      slug: posts[0].slug
    }
    const output = await usecase.execute(input)
    expect(output).toStrictEqual(posts[0]);
  });

  it('throws an error if a post not found', async () => {
    const usecase = new GetPostUsecase(postsGateway);
    const input = {
      slug: 'invalid-slug'
    }
    await expect(usecase.execute(input)).rejects.toThrow(new Error('Post not found'));
  });
});