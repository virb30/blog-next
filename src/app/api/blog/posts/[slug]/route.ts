import { GetPostInput } from "@/_modules/blog/_application/usecase/GetPost/GetPost.usecase";
import { PostsUsecaseFactory } from "@/_modules/blog/_application/usecase/Posts.usecase-factory";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const usecase = PostsUsecaseFactory.makeGetPostUsecase();
  const { slug } = await params
  const input: GetPostInput = {
    slug
  }
  const output = await usecase.execute(input);
  return Response.json(output);
}