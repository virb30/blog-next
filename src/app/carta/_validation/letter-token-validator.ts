import { jwtDecode } from 'jwt-decode';

export type LetterPayload = {
	title: string;
	surname: string;
	version: string;
	gender: "F" | "M";
};

export const decodeToken = (token: string | null): LetterPayload | null => {
	if (!token) {
		return null;
	}

	const jwt = jwtDecode<LetterPayload>(token);

	if (!jwt.title || !jwt.surname || !jwt.version) {
		return null;
	}

	return jwt;
}