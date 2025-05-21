import { MemoryPostsGateway } from "../../_infrastructure/gateway/PostsGateway/memory/MemoryPostsGateway";
import { GetPostUsecase } from "./GetPost/GetPost.usecase";
import { ListPostsUsecase } from "./ListPosts/ListPosts.usecase";
import { PostsUsecaseFactory } from "./Posts.usecase-factory";

describe("PostsUsecaseFactory unit tests", () => {

  beforeEach(() => {
    PostsUsecaseFactory['postsGateway'] = new MemoryPostsGateway([]);
  });
  it("returns ListPostUsecase", () => {
    const usecase = PostsUsecaseFactory.makeListPostsUsecase();
    expect(usecase).toBeInstanceOf(ListPostsUsecase);
  });

  it("returns GetPostUsecase", () => {
    const usecase = PostsUsecaseFactory.makeGetPostUsecase();
    expect(usecase).toBeInstanceOf(GetPostUsecase);
  });
});