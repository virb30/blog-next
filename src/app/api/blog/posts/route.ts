import { ListPostsInput } from "@/_modules/blog/_application/usecase/ListPosts/ListPosts.usecase";
import { PostsUsecaseFactory } from "@/_modules/blog/_application/usecase/Posts.usecase-factory";
import { NextRequest } from "next/server";

const DEFAULT_LIMIT_POSTS = 'all';

export async function GET(request: NextRequest) {
  const usecase = PostsUsecaseFactory.makeListPostsUsecase();
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit");
  const page = searchParams.get("page") ?? '1';
  const input: ListPostsInput = {
    limit: limit ?? DEFAULT_LIMIT_POSTS,
    page: parseInt(page)
  }
  const output = await usecase.execute(input);
  return Response.json(output);
}