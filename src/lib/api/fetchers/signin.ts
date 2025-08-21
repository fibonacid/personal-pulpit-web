import type { ApiFetcher, ApiHandler, ApiResponse } from "../types";
import { jsonFetcher, API_URL } from "../utils";
import { useMutation } from "@tanstack/react-query";

export type SignInRequestBody = ApiHandler<'signinInput'>
export type SignInResponseBody = ApiResponse<{
	metadata: {
		status: string,
		timestamp: string
	},
	user: {
		created_at: string,
		email: string,
		first_name: string,
		id: number,
		last_name: string
	}
}>

export const signIn: ApiFetcher<SignInRequestBody, SignInResponseBody> = async (input) => {
	const url = new URL('/api/v1/auth/register', API_URL);
	const request = new Request(url, {
		method: 'POST',
		body: JSON.stringify(input),
	});
	return jsonFetcher<SignInResponseBody>(request);
}

export type SignInResult = Awaited<ReturnType<typeof signIn>>;

export function useSignIn(options: {
	onSuccess?: (data: SignInResult) => void;
	onError?: (error: Error) => void;
} = {}) {
	return useMutation({
		mutationFn: (input: SignInRequestBody) => signIn(input),
		...options
	})
}
