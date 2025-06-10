import { decodeToken } from '@/utils/jwt-validator';

export type LetterPayload = {
	title: string;
	surname: string;
	version: string;
	gender: "F" | "M";
};

export const decodeLetterToken = (token: string | null): LetterPayload | null => {
	if (!token) {
		return null;
	}

	const payload = decodeToken<LetterPayload>(token);

	if (!payload.title || !payload.surname || !payload.version) {
		return null;
	}

	return payload;
}