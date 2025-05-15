import { Post, PostsGatewayInterface } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";
import { Usecase } from "@/_modules/shared/application/usecase.interface";

export class GetPostUsecase implements Usecase<GetPostInput, GetPostOutput> {
  constructor(private postsGateway: PostsGatewayInterface) { }

  async execute(input: GetPostInput): Promise<GetPostOutput> {
    return this.postsGateway.getPost(input.slug);
  }
}

export type GetPostInput = { slug: string };
export type GetPostOutput = Post;
