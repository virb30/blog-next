import { jwtVerify, decodeJwt } from "jose";

export function getSecret() {
  return new TextEncoder().encode(
    process.env.NEXT_JWT_SECRET || 'jwt-secret'
  );
}

export async function verifyToken<TokenPayload>(token: string) {
  const secret = getSecret();
  try {
    const { payload } = await jwtVerify<TokenPayload>(token, secret, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return null;
  }
}

export function decodeToken<TokenPayload>(token: string) {
  return decodeJwt<TokenPayload>(token);
}
