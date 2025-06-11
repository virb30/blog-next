
const baseUrl = process.env.NEXT_PUBLIC_APP_URL as string;

export interface UrlParams {
  [key: string]: string | number | undefined;
}

export const buildUrlWithParams = (path: string, params?: UrlParams) => {
  const url = new URL(path, baseUrl);
  if (params) {
    for (const key in params) {
      url.searchParams.append(key, String(params[key]));
    }
  }
  return url;
}