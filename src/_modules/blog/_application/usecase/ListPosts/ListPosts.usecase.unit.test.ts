import { Post, PostsGatewayInterface } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";
import { ListPostsInput, ListPostsUsecase } from "./ListPosts.usecase";
import { MemoryPostsGateway } from "@/_modules/blog/_infrastructure/gateway/PostsGateway/memory/MemoryPostsGateway";
import { PostFakeBuilder } from "@/__fixtures__/post-fake.builder";

describe('ListPostsUsecase Unit tests', () => {

  let postsGateway: PostsGatewayInterface;
  let posts: Post[];

  beforeEach(() => {
    posts = PostFakeBuilder.thePosts(3).build();
    postsGateway = new MemoryPostsGateway(posts);
  })

  it('list all posts', async () => {
    const usecase = new ListPostsUsecase(postsGateway);
    const input: ListPostsInput = {}
    const output = await usecase.execute(input);
    expect(output.data).toStrictEqual(posts);
    expect(output.pagination).toStrictEqual({
      page: 1,
      pages: 1,
      next: null,
      prev: null
    })
  });

  it('list posts with pagination', async () => {
    const usecase = new ListPostsUsecase(postsGateway);
    let output = await usecase.execute({
      limit: 2,
      page: 1,
    });
    let expectedPosts = posts.slice(0, 2);
    expect(output.data).toStrictEqual(expectedPosts);
    expect(output.pagination).toStrictEqual({
      page: 1,
      pages: 2,
      next: 2,
      prev: null
    });

    output = await usecase.execute({
      limit: 2,
      page: 2
    });
    expectedPosts = posts.slice(2, 4);
    expect(output.data).toStrictEqual(expectedPosts);
    expect(output.pagination).toStrictEqual({
      page: 2,
      pages: 2,
      next: null,
      prev: 1
    });
  });
});