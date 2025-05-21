import { PostsGatewayInterface } from "@/_modules/blog/_domain/gateway/PostsGateway.interface";
import { GhostApiPostsGateway } from "@/_modules/blog/_infrastructure/gateway/PostsGateway/http/GhostApiPostsGateway";

export function setupPostsGateway(): PostsGatewayInterface {
  const baseUrl = process.env.NEXT_GHOST_BASE_URL as string;
  const key = process.env.NEXT_GHOST_API_KEY as string;
  const version = process.env.NEXT_GHOST_API_VERSION as string;

  return new GhostApiPostsGateway({ baseUrl, key, version });
}