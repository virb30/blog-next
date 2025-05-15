import { setupPostsGateway } from "@/config/PostsGateway.config";
import { PostsGatewayInterface } from "../../_domain/gateway/PostsGateway.interface";
import { ListPostsUsecase } from "./ListPosts/ListPosts.usecase";
import { GetPostUsecase } from "./GetPost/GetPost.usecase";

export class PostsUsecaseFactory {

  static postsGateway: PostsGatewayInterface | null = null;

  private static getPostsGatewayInstance(): PostsGatewayInterface {
    if (!this.postsGateway) {
      this.postsGateway = setupPostsGateway();
    }
    return this.postsGateway;
  }

  static makeListPostsUsecase(): ListPostsUsecase {
    return new ListPostsUsecase(this.getPostsGatewayInstance());
  }

  static makeGetPostUsecase(): GetPostUsecase {
    return new GetPostUsecase(this.getPostsGatewayInstance());
  }
}