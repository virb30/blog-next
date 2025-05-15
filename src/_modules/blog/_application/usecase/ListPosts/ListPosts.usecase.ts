import { Usecase } from "@/_modules/shared/application/usecase.interface";
import { GetPostsParams, Paginated, Post, PostsGatewayInterface } from "../../../_domain/gateway/PostsGateway.interface";

export class ListPostsUsecase implements Usecase<ListPostsInput, ListPostsOutput> {
  constructor(private postsGateway: PostsGatewayInterface) { }

  async execute(input: ListPostsInput): Promise<ListPostsOutput> {
    return this.postsGateway.getPosts(input);
  }
}

export type ListPostsInput = Omit<GetPostsParams, "include">;

export type ListPostsOutput = Paginated<Post>;